import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { AuthServices } from "./auth.service";
import config from "../../config";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";

const login = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthServices.loginUser(req.body);
  const { accessToken, refreshToken } = result;
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: config.NODE_ENV === "production",
    sameSite: "none",
    maxAge: 1000 * 60 * 60 * 24 * 365,
  });
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "User logged in successfully",
    data: {
      accessToken,
    },
  });
});
const refreshToken = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthServices.refreshToken(req.cookies.refreshToken);
  console.log(result);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Access token is retrieved successfully",
    data: result,
  });
});

export const AuthControllers = {
  login,
  refreshToken,
};
