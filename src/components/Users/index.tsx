import { Outlet } from "react-router-dom";

export type UsersData = {
  accountBalance: string;
  accountNumber: string;
  createdAt: string | number;
  education: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: string[];
    loanRepayment: string;
  };
  email: string;
  guarantor: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    address: string;
  };
  id: string;
  lastActiveDate: string;
  orgName: string;
  phoneNumber: string;
  profile: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    avatar: string;
    bvn: string;
  };
  socials: { facebook: string; instagram: string; twitter: string };
  userName: string;
};

export const UsersSection = () => {
  return <Outlet />;
};
