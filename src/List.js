import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"
import "./App.css"

function List() {
  let myFavs = []
  if (localStorage && localStorage["myFavs"]) {
    myFavs = JSON.parse(localStorage["myFavs"])
  }
  
  function formatName(game) {
    return game.split("-").join(" ")
  }

  return (
    <div>
      <ul>
        {myFavs.map(game => {
          return (
            <Link className="fav-list" to={`/game/${game}`}>{formatName(game)}</Link>
          )
        })}
      </ul>
    </div>
  )
  
}

export default withRouter(List)