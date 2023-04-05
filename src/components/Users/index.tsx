import React from "react";
import card_users_icon from "../../assets/icons/card_users_icon.svg";
import card_active_users_icon from "../../assets/icons/card_active_users_icon.svg";
import card_savings_icon from "../../assets/icons/card_savings_icon.svg";
import card_users_with_loans_icon from "../../assets/icons/card_users_with_loans_icon.svg";

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

export const Users = () => {
  const [usersData, setUsersData] = React.useState<UsersData[]>();
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const cardData = [
    { icon: card_users_icon, title: "users", stat: "2,453" },
    { icon: card_active_users_icon, title: "active users", stat: "2,453" },
    {
      icon: card_users_with_loans_icon,
      title: "users with loans",
      stat: "12,453",
    },
    { icon: card_savings_icon, title: "users with savings", stat: "102,453" },
  ];

  return (
    <div className="users">
      <h2>users</h2>
      <div className="users__cards">
        {cardData.map((data, index) => (
          <div className="card" key={index}>
            <img src={data.icon} />
            <div className="card__info">
              <p className="card__title">{data.title}</p>
              <p className="card__stat">{data.stat}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
