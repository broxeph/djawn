import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

const uuid = shortid.generate;

const Table = ({ data }) =>
  !data.length ? (
    <p>Nothing to show</p>
  ) : (
    <div>
      <div className="row">
        <h1>
          Organizations
        </h1>
      </div>
      <div className="row">
        <p>
          Showing <strong>{data.length} items</strong>
        </p>
        <table className="table table-striped">
          <thead>
            <tr>
              {Object.entries(data[0]).map(el => <th key={uuid()}>{el[0]}</th>)}
            </tr>
          </thead>
          <tbody>
            {data.map(el => (
              <tr key={el.id}>
                {Object.entries(el).map(el => <td key={uuid()}>{el[1]}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

Table.propTypes = {
  data: PropTypes.array.isRequired
};

export default Table;
