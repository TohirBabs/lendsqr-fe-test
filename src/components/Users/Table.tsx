import React from "react";
import { UsersData } from ".";
import filter_icon from "../../assets/icons/filter_icon.svg";
import dots_icon from "../../assets/icons/vertical_dots_icon.svg";

type Props = {
  data: UsersData[];
};

type DateProps = {
  date: any;
};

type rowProps = {
  key: number;
  data: UsersData;
};

type headerProps = {
  key: number;
  header: string;
};

const statusValues = ["active", "inactive", "pending", "blacklisted"];

const FormattedDate = ({ date }: DateProps) => {
  const newDate = new Date(date);
  const formatedDate = newDate.toDateString();
  return <td>{formatedDate}</td>;
};

export const Table = ({ data }: Props) => {
  const headers = [
    "organisation",
    "username",
    "email",
    "phone number",
    "date joined",
    "status",
  ];

  const TableRow = ({ key, data }: rowProps) => {
    const [showMenu, setShowMenu] = React.useState<boolean>(false);
    const [status, setStatus] = React.useState<string>(
      statusValues[data.email.length % 4]
    );

    return (
      <tr key={key}>
        <td>{data.orgName}</td>
        <td>{data.userName}</td>
        <td>{data.email}</td>
        <td>{data.phoneNumber}</td>
        <FormattedDate date={data.createdAt} />
        <td className={status}>
          <p>{status}</p>
        </td>
        <td>
          <img src={dots_icon} onClick={() => setShowMenu((show) => !show)} />
        </td>
      </tr>
    );
  };

  const TableHeader = ({ key, header }: headerProps) => {
    const [showFilter, setShowFilter] = React.useState<boolean>(false);

    return (
      <th>
        <span>{header}</span>{" "}
        <img src={filter_icon} onClick={() => setShowFilter(!showFilter)} />
      </th>
    );
  };

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <TableHeader key={index} header={header} />
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => (
            <TableRow key={index} data={data} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
