import React from "react";
import { UsersData } from "./components/Users";

export const useTable = (
  data: UsersData[],
  page: number,
  rowsPerPage: number
) => {
  const [tableRange, setTableRange] = React.useState<number[]>([]);
  const [slice, setSlice] = React.useState<UsersData[]>([]);

  const calculateRange = () => {
    const range = [];
    const num = Math.ceil(data.length / rowsPerPage);
    let i = 1;
    for (let i = 1; i <= num; i++) {
      range.push(i);
    }
    return range;
  };

  const sliceData = () => {
    return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
  };

  React.useEffect(() => {
    const range = calculateRange();
    setTableRange([...range]);

    const slice = sliceData();
    setSlice([...slice]);
  }, [data, setTableRange, page, setSlice, rowsPerPage]);

  return { slice, range: tableRange };
};
