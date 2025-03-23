import { TUser } from "./user.interface";
import { User } from "./user.model";

const createUserIntoDB = async (payload: TUser) => {
  const res = await User.create(payload);
  return res;
};

export const UserServices = {
  createUserIntoDB,
};
