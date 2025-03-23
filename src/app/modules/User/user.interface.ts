import { Model } from "mongoose";

export type TUser = {
  email: string;
  password: string;
  passwordChangedAt?: Date;
  name: {
    firstName: string;
    lastName: string;
  };
  contactNo: string;
};
