export type TUser = {
  email: string;
  password: string;
  passwordChangedAt?: Date;
  name: {
    firstName: string;
    lastName: string;
  };
  contactNo: string;
  role: "manager" | "user";
};
