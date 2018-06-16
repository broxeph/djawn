import React from "react";
import ReactTable from "react-table";
import Moment from "moment";

import "react-table/react-table.css";

const Table = ({ data }) =>
  !data.length ? (
    <p>Nothing to show</p>
  ) : (
    <div>
      <p className="Table-header">
        Organizations
      </p>
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
          {
            id: 'created',
            Header: "Created",
            accessor: c => {
              return Moment(c.created)
                .local()
                .format("h:mm:ss a, MMM Do, YYYY")
            }
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
