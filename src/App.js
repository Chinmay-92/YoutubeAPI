import React, { Component } from "react";
import {
  Route,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
class App extends Component {

  render() {
    return (
      <HashRouter>
        <div>
          <h1 style={{ textAlign: "center" }}>Youtube Search</h1>
          {/* <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
          </ul> */}
          <div className="content">
            <Route exact path="/" component={Home} />
          </div>
        </div>
      </HashRouter >
    );
  }
}

export default App;