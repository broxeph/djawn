import React, { Component } from "react";
import PropTypes from "prop-types";
class Form extends Component {
  static propTypes = {
    endpoint: PropTypes.string.isRequired
  };
  state = {
    name: ""
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { name } = this.state;
    const organization = { name };
    const conf = {
      method: "post",
      body: JSON.stringify(organization),
      headers: new Headers({ "Content-Type": "application/json" })
    };
    fetch(this.props.endpoint, conf).then(response => console.log(response));  // TODO: Add to table
  };
  render() {
    const { name } = this.state;
    return (
      <div className="row">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.handleChange}
              value={name}
              placeholder="Enter name"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Organization
          </button>
        </form>
      </div>
    );
  }
}
export default Form;
