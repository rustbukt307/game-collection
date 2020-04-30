import React from 'react';
import { Link } from "react-router-dom"
import "./App.css"

function Nav() {
  return (
    <div>
      <nav className="App-header"> 
          <Link to="/">
            <h1>The Player's Vault</h1>
          </Link>
          <Link to="/collection">
            <button className="collection">View Collection</button>
          </Link>
        </nav>
    </div>
  )
}

export default Nav;
