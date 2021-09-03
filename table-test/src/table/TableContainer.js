import React from "react";
import makeData from "./makeData";
import Table from "./Table";
import TableDropdown from "./Dropdown";

const TableContainer = () => {
  const data = React.useMemo(() => makeData(10), []);

  //used for pagination, I didn't include pagination in the table because of time
 
  //eslint-disable-next-line
  const [queryParams, setQueryParams] = React.useState({
    skip: 0,
    limit: 10,
    filter: {},
  });

  const columns = React.useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
      {
        Header: "Age",
        accessor: "age",
      },
      {
        Header: "Visits",
        accessor: "visits",
      },
      {
        Header: "Progress",
        accessor: "progress",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "",
        accessor: "edit",
        Cell: ({ row }) => <TableDropdown row={row} />,
      },
    ],
    []
  );

  return (
    <Table
      columns={columns}
      data={data || []}
      //you can use this to set loading state
      loading={!data}
      //this is for pagination to get the total pages available
      pageCount={data ? data.totalPages : 0}
      //for pagination too, to set query params, but I didn't include it because of time
      setQueryParams={setQueryParams}
    />
  );
};

export default TableContainer;
