import React, { Component } from "react";
import PropTypes from "prop-types";

class DataProvider extends Component {
  static propTypes = {
    endpoint: PropTypes.string.isRequired,
    render: PropTypes.func.isRequired
  };

  state = {
    data: [],
    loaded: false,
    placeholder: "Loading..."
  };

  async componentDidMount() {
    try {
      await fetch(this.props.endpoint)
        .then(response => {
          if (response.status !== 200) {
            return this.setState({placeholder: "Something went wrong."});
          }
          return response.json();
        })
        .then(data => this.setState({data: data, loaded: true}));
    } catch(e) {
      console.log(e);
      return this.setState({placeholder: "Something went wrong."});
    }
  }

  render() {
    const { data, loaded, placeholder } = this.state;
    return loaded ? this.props.render(data) : <p>{placeholder}</p>;
  }
}

export default DataProvider;
