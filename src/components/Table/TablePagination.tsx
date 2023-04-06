import React, { useEffect } from "react";
import next_icon from "../../assets/icons/next_icon.svg";
import prev_icon from "../../assets/icons/prev_icon.svg";
import { UsersData } from "../Users";

type Props = {
  range: number[];
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  slice: UsersData[];
  setRowsPerPage: React.Dispatch<React.SetStateAction<number>>;
};

const slices = [10, 25, 50];

export const TablePagination = ({
  range,
  setPage,
  page,
  slice,
  setRowsPerPage,
}: Props) => {
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);

  return (
    <div className="table-pagination">
      <div className="slice">
        <p>Showing</p>
        <select onChange={(e) => setRowsPerPage(+e.target.value)}>
          {slices.map((slice) => (
            <option value={slice}>{slice}</option>
          ))}
        </select>
        <p>out of 100</p>
      </div>
      <div className="page">
        <img
          src={prev_icon}
          onClick={() => setPage((page) => (page > 1 ? page - 1 : 1))}
        />
        {range.map((el, index) => (
          <button
            key={index}
            onClick={() => setPage(el)}
            className={page === el ? "active_page" : ""}
          >
            {el}
          </button>
        ))}
        <img
          src={next_icon}
          onClick={() =>
            setPage((page) => (page < range.length ? page + 1 : range.length))
          }
        />
      </div>
    </div>
  );
};
