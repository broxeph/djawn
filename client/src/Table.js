import React from "react";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

const Table = ({ data }) =>
  !data.length ? (
    <p>Nothing to show</p>
  ) : (
    <div>
      <ReactTable
        data={data}
        columns={[
          {
            Header: "id",
            accessor: 'id'
          },
          {
            Header: "Name",
            accessor: 'name'
          },
        ]}
        defaultPageSize={10}
        minRows={1}
        className="-striped -highlight"
      />
      <br />
    </div>
  );

export default Table;
