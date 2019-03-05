import React, { Component } from 'react';
import './App.css';
import Form from './Form.js';

class App extends Component {
  state = {
    fields: {}
  };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue,
      }
    });
  };

  render() {
    return (
      <div className="App">
        <div class="row">  
          <div class="column">
            <p>
            <img SRC="GiantRobotLTD_Logo.svg" alt="GIANT ROBOT LTD." width="177" height="26"/>
              <h1> Welcome </h1> 
              Please tell us a bit about yourself to get started.
            </p>
          </div>
          <div class="column">
            <Form onChange={fields => this.onChange(fields)} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
