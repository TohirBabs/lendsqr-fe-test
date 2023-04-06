import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import filled_star from "../../assets/icons/filled_star_icon.svg";
import back_icon from "../../assets/icons/back_arrow_icon.svg";
import outlined_star from "../../assets/icons/outlined_star_icon.svg";
import dots_icon from "../../assets/icons/vertical_dots_icon.svg";
import { UsersData } from ".";

type Params = {
  userId?: number;
};

export const UserDetails = () => {
  let params = useParams();
  let navigate = useNavigate();
  const [usersData, setUsersData] = React.useState<UsersData>();
  const [showMenu, setShowMenu] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (localStorage.getItem("usersData") && params.userId) {
      const users = JSON.parse(localStorage.getItem("usersData") || "");
      setUsersData(users[-1 + params.userId]);
    }

    const dataFetch = async () => {
      const detail = await (
        await fetch(
          `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${params.userId}`
        )
      ).json();
      setUsersData(detail);
      localStorage.setItem("usersDetail", JSON.stringify(detail));
    };

    dataFetch();
  }, []);

  const DetailsData = () => {
    if (usersData) {
      const detailsData = [
        {
          title: "personal information",
          info: {
            info_titles: [
              "full name",
              "phone number",
              "email address",
              "bvn",
              "gender",
              "marital status",
              "children",
              "type of residence",
            ],
            info_data: [
              usersData.profile.firstName + " " + usersData.profile.lastName,
              usersData.phoneNumber,
              usersData.email,
              usersData.profile.bvn,
              usersData.profile.gender,
              " single",
              "none",
              "parent's apartment",
            ],
          },
        },
        {
          title: "education and employment",
          info: {
            info_titles: [
              "level of education",
              "employment",
              "sector of employment",
              "duration of employment",
              "office email",
              "monthly income",
              "loan repayment",
            ],
            info_data: [
              usersData.education.level,
              usersData.education.employmentStatus,
              usersData.education.sector,
              usersData.education.duration,
              usersData.education.officeEmail,
              `₦${usersData.education.monthlyIncome[0]} - ₦
                ${usersData.education.monthlyIncome[1]}`,
              usersData.education.loanRepayment,
            ],
          },
        },
        {
          title: "socials",
          info: {
            info_titles: ["twitter", "facebook", "instagram"],
            info_data: [
              usersData.socials.twitter,
              usersData.socials.facebook,
              usersData.socials.instagram,
            ],
          },
        },
        {
          title: "guarantor",
          info: {
            info_titles: [
              "full name",
              "phone number",
              "email address",
              "relationship",
            ],
            info_data: [
              usersData.guarantor.firstName +
                " " +
                usersData.guarantor.lastName,
              usersData.guarantor.phoneNumber,
              usersData.email,
              "single",
            ],
          },
        },
      ];

      return (
        <>
          {detailsData.map((userDetail) => (
            <div className="personal-info">
              <h4>{userDetail.title}</h4>
              <div>
                {userDetail.info.info_titles.map((title, index) => (
                  <div className="info">
                    <p>{title}</p>
                    <p>{userDetail.info.info_data[index]}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </>
      );
    } else return <>Reload page</>;
  };

  return (
    <div className="user-details">
      <button className="back_button" onClick={() => navigate(-1)}>
        <img src={back_icon} alt="" />
        <p>back to users</p>
      </button>
      <div className="user-details__header">
        <h3>user details</h3>
        <div className="actions">
          <button>blacklist user</button>
          <button>activate user</button>
        </div>
      </div>
      {usersData && (
        <>
          <div className="user-details__card">
            <div className="details_nav">
              <img
                src={dots_icon}
                onClick={() => setShowMenu((show) => !show)}
                className="menu_icon"
              />
              {showMenu && (
                <div className="details_menu">
                  <button>general details</button>
                  <button>documents</button>
                  <button>loan</button>
                  <button>savings</button>
                  <button>app and system</button>
                </div>
              )}
            </div>

            <div className="user_info">
              <div className="id">
                <img src={usersData.profile.avatar} alt="" />
                <div className="name">
                  <p>
                    {usersData.profile.firstName +
                      " " +
                      usersData.profile.lastName}
                  </p>
                  <p>{usersData.accountNumber}</p>
                </div>
              </div>
              <div className="rating">
                <p>user's tier</p>
                <div className="">
                  <img src={filled_star} alt="" />
                  <img src={outlined_star} alt="" />
                  <img src={outlined_star} alt="" />
                </div>
              </div>
              <div className="finance">
                <p>₦{usersData.accountBalance}</p>
                <p>9912345678/Providus Bank</p>
              </div>
            </div>
            <div className="sections">
              <button>General Details</button>
              <button>documents</button>
              <button>bank details</button>
              <button>loans</button>
              <button>savings</button>
              <button>app and system</button>
            </div>
          </div>
          <div className="user-details__general-details">
            <DetailsData />
          </div>
        </>
      )}
    </div>
  );
};
