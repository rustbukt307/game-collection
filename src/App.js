import React, { Component } from 'react';
import Home from "./Home"
import List from "./List"
import { Route, Link } from "react-router-dom"

class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="App" >
        {/* move to seperate Nav component */}
        <nav className="App-header"> 
          <Link to="/">
            <h1>The Player's Vault</h1>
          </Link>
        </nav>
        <div>
          <Route exact path="/">
            <Home  />
          </Route>
          {/* <Route path="/collection/:index"> */}
            {/* <List  />
          </Route> */}
        </div>
        {/* Footer component goes here */}
      </div>
    )
  }
}
export default App