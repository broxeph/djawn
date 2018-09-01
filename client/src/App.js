import React, { Component } from 'react';
import logo from './logo.svg';
import DataProvider from "./DataProvider";
import Table from "./Table";
import Form from "./Form";

import './App.css';
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">DJawn. What up.</h1>
        </header>

        <nav className="App-sidebar">
          <div className="sidebar-header">
            <h3>Menu!</h3>
          </div>
          <ul className="list-unstyled components">
            <li className="active">
              <a href="#organizations"><i className="fa fa-briefcase"/>Organizations</a>
            </li>
            <li className="active">
              <a href="#contacts"><i className="fa fa-address-book"/>Contacts</a>
            </li>
          </ul>
        </nav>

        <div id="content" className="container">
          <React.Fragment>
            <DataProvider endpoint="http://localhost:8000/api/organization/" render={data => <Table data={data} />} />
            <Form endpoint="http://localhost:8000/api/organization/" />
          </React.Fragment>
        </div>
      </div>
    );
  }
}

export default App;
