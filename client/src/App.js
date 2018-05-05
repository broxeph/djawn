import React, { Component } from 'react';
import logo from './logo.svg';
import DataProvider from "./DataProvider";
import Table from "./Table";
import Form from "./Form";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">DJawn. What up.</h1>
        </header>
        <p className="App-intro">
          This is the best app. It's tremendous. Tremendous app.
        </p>
        <React.Fragment>
          <DataProvider endpoint="http://localhost:8000/api/organization/" render={data => <Table data={data} />} />
          <Form endpoint="http://localhost:8000/api/organization/" />
        </React.Fragment>
      </div>
    );
  }
}

export default App;
