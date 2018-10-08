import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";

const Header = styled.div`
  color: ${props => props.theme.main || "pink"};
`;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: {
        main: "black"
      }
    };
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <div className="App">
          <Header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </Header>
          <select
            onChange={event => {
              this.setState({ theme: { main: event.target.value } });
            }}
          >
            <option value="red">RED</option>
            <option value="yellow">Yellow</option>
            <option value="pink">Pink</option>
            <option value="mediumseagreen">Green</option>
          </select>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
