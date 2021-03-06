import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Badcomponent from './Badcomponent';
import ErrorBoundary from './ErrorBoundary';

class App extends Component {

  constructor() {
    super();
    this.state = { 
      basicValue: ''
    };

    this.handleBasicInputChanges = this.handleBasicInputChanges.bind(this);
  }

  handleBasicInputChanges(e) {
    this.setState({
      basicValue: e.target.value
    });
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Basic Tests</h1>
        </header>
        <p className="App-intro">
          {/* <BasicInput 
            type="text"
            placeholder="type something"
            handleChanges={this.handleBasicInputChanges}
          /> */}
        </p>
        <ErrorBoundary>
        <Badcomponent heroName={"batman"}/>
        </ErrorBoundary>
        <ErrorBoundary>

        <Badcomponent heroName={"superman"}/>
        </ErrorBoundary>

        <ErrorBoundary>

        <Badcomponent heroName={"joker"}/>
        

        </ErrorBoundary>

      </div>
    );
  }
}

export default App;
