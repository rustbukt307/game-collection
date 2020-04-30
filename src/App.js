import React, { Component } from 'react';
import Nav from "./Nav"
import Home from "./Home"
import List from "./List"
import { Route } from "react-router-dom"
import "./App.css"

class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="App" >
        <Nav/>
        <div>
          <Route exact path="/">
            <Home  />
          </Route>
          <Route path="/collection">
            <List  />
          </Route>
        </div>
        <footer>
          Powered by RAWG | Design and Development by Tom Moliterno
        </footer>
      </div>
    )
  }
}

export default App