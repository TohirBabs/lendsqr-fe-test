import React from "react";
import filter_icon from "../../assets/icons/filter_icon.svg";
import dots_icon from "../../assets/icons/vertical_dots_icon.svg";
import view_icon from "../../assets/icons/view_icon.svg";
import cancel_user_icon from "../../assets/icons/cancel_user_icon.svg";
import activate_user_icon from "../../assets/icons/activate_user_icon.svg";
import { TablePagination } from "./TablePagination";
import { NavLink } from "react-router-dom";
import { UsersData } from "../Users";
import { useTable } from "../../hooks";

type Props = {
  data: UsersData[];
  rowsPerPage: number;
  setRowsPerPage: React.Dispatch<React.SetStateAction<number>>;
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

export const Table = ({ data, rowsPerPage, setRowsPerPage }: Props) => {
  const [page, setPage] = React.useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
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
          {showMenu && (
            <div className="row_menu" onClick={() => setShowMenu(false)}>
              <NavLink to={data.id}>
                <img src={view_icon} />
                <p>view details</p>
              </NavLink>
              <button onClick={() => setStatus("blacklisted")}>
                <img src={cancel_user_icon} />
                <p>blacklist user</p>
              </button>
              <button onClick={() => setStatus("active")}>
                <img src={activate_user_icon} />
                <p>activate</p>
              </button>
            </div>
          )}
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
        {showFilter && (
          <form action="">
            <label htmlFor="organization">organization</label>
            <input type="text" />
            <label htmlFor="username">username</label>
            <input type="text" placeholder="Username" />
            <label htmlFor="email">email</label>
            <input type="email" placeholder="email" />
            <label htmlFor="date">date</label>
            <input type="date" />
            <label htmlFor="phone number">phone number</label>
            <input type="phone" placeholder="Phone number" />
            <label htmlFor="status">status</label>
            <select>
              {statusValues.map((status) => (
                <option value={status}>{status}</option>
              ))}
            </select>
            <div className="buttons">
              <button type="reset">reset</button>
              <button type="submit">submit</button>
            </div>
          </form>
        )}
      </th>
    );
  };

  return (
    <>
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
            {slice.map((data, index) => (
              <TableRow key={index} data={data} />
            ))}
          </tbody>
        </table>
      </div>
      <TablePagination
        range={range}
        slice={slice}
        setPage={setPage}
        page={page}
        setRowsPerPage={setRowsPerPage}
      />
    </>
  );
};
