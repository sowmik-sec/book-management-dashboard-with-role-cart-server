import jwt, { JwtPayload } from "jsonwebtoken";

export const createToken = (
  data: Record<string, unknown>,
  secret: string,
  expiresIn: number
) => {
  return jwt.sign(data, secret, { expiresIn: `${expiresIn * 24 * 60 * 60}` });
};

export const verifyToken = (token: string, secret: string) => {
  return jwt.verify(token, secret) as JwtPayload;
};
