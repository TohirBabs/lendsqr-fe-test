import React from "react";
import briefcase_icon from "../../assets/icons/briefcase_icon.svg";
import users_icon from "../../assets/icons/users_icon.svg";
import guarantors_icon from "../../assets/icons/guarantors__icon.svg";
import loans_icon from "../../assets/icons/loans_icon.svg";
import handshake_icon from "../../assets/icons/handshake_icon.svg";
import savings_icon from "../../assets/icons/savings_icon.svg";
import request_icon from "../../assets/icons/request_icon.svg";
import user_check_icon from "../../assets/icons/user-check_icon.svg";
import loan_hand_icon from "../../assets/icons/loan-hand_icon.svg";
import bank_icon from "../../assets/icons/bank_icon.svg";
import coins_icon from "../../assets/icons/coins_icon.svg";
import reciept_icon from "../../assets/icons/reciept_icon.svg";
import galaxy_icon from "../../assets/icons/galaxy_icon.svg";
import user_cog_icon from "../../assets/icons/user-cog_icon.svg";
import scroll_doc_icon from "../../assets/icons/scroll-doc_icon.svg";
import bar_chart_icon from "../../assets/icons/bar-chat_icon.svg";
import sliders_icon from "../../assets/icons/sliders_icon.svg";
import badge_percent_icon from "../../assets/icons/badge-percent_icon.svg";
import clipboard_icon from "../../assets/icons/clipboard_icon.svg";
import home_icon from "../../assets/icons/home_icon.svg";
import arrow_down_icon from "../../assets/icons/arrow-down_icon.svg";

import user_times_icon from "../../assets/icons/user-times_icon.svg";
import { NavLink } from "react-router-dom";

type Props = {
  setMenu: React.Dispatch<React.SetStateAction<string>>;
  menu: string;
};

type navProps = {
  item: {
    name: string;
    icon: string;
  };
};

const NavItems = [
  {
    sectionName: "customers",
    sectionNavs: [
      { name: "users", icon: users_icon },
      { name: "guarantors", icon: guarantors_icon },
      { name: "loans", icon: loans_icon },
      { name: "decision models", icon: handshake_icon },
      { name: "savings", icon: savings_icon },
      { name: "loan requests", icon: request_icon },
      { name: "whitelist", icon: user_check_icon },
      { name: "karma", icon: user_times_icon },
    ],
  },
  {
    sectionName: "businesses",
    sectionNavs: [
      { name: "organization", icon: briefcase_icon },
      { name: "loan products", icon: loan_hand_icon },
      { name: "savings products", icon: bank_icon },
      { name: "fees and charges", icon: coins_icon },
      { name: "transactions", icon: reciept_icon },
      { name: "services", icon: galaxy_icon },
      { name: "service Account", icon: user_cog_icon },
      { name: "settlements", icon: scroll_doc_icon },
      { name: "reports", icon: bar_chart_icon },
    ],
  },
  {
    sectionName: "settings",
    sectionNavs: [
      { name: "preferences", icon: sliders_icon },
      { name: "fees and pricing", icon: badge_percent_icon },
      { name: "audit logs", icon: clipboard_icon },
    ],
  },
];

export const SideNav = ({ setMenu, menu }: Props) => {
  const SidebarNavItem = ({ item }: navProps) => {
    return (
      <NavLink
        to={item.name}
        className="sideNav__item"
        onClick={() => setMenu("close")}
      >
        <img src={item.icon} alt="" />
        <p>{item.name}</p>
      </NavLink>
    );
  };
  return (
    <nav className={`sideNav ${menu}`}>
      <button type="button" className="sideNav__item">
        <img src={briefcase_icon} alt="" />
        <p>switch Organisation</p>
        <img src={arrow_down_icon} alt="" />
      </button>{" "}
      <button type="button" className="sideNav__item">
        <img src={home_icon} alt="" />
        <p>dashboard</p>
      </button>
      {NavItems.map((navSection) => (
        <>
          <h3 className="sideNav__section">{navSection.sectionName}</h3>
          {navSection.sectionNavs.map((navItem) => (
            <SidebarNavItem item={navItem} />
          ))}
        </>
      ))}
    </nav>
  );
};
