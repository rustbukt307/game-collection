import React from 'react';
import "./App.css"
import Button from "./Button"

let store = []

function Game(props) {
  if (localStorage["myFavs"]) {
    store = localStorage["myFavs"]
  }
  
  if (props.game.redirect) return <h2>Did you mean {props.game.slug}?</h2>

  function addToFav() {
    let game = props.game.slug
    if (localStorage) {
      let myFavs
      if (!localStorage["myFavs"]) myFavs = []
      else myFavs = JSON.parse(localStorage["myFavs"])
      if (!myFavs.includes(game)) myFavs.push(game)
      localStorage.setItem("myFavs", JSON.stringify(myFavs))
    }
  }

  return (
    <div className="game-container">

      <div className="game-info">
        <h2>{props.game.name_original}</h2>
        <p>{props.game.description_raw}</p>
      </div>

      <div className="game-details">
        <Button addToFav={addToFav} text="Add to Collection"/>
        <p>Released: {props.game.released}</p>
        {props.game.parent_platforms.map(platform => {
          return<p>Play on: {platform.platform.name}</p>
        })}
        {props.game.genres.map(genres => {
          return<p>Genre: {genres.name}</p>
        })}
        {props.game.developers.map(developers => {
          return<p>Developer: {developers.name}</p>
        })}
        {props.game.publishers.map(publishers => {
          if (publishers.name){
            return <p>Publisher: {publishers.name}</p>
          }})}
        {props.game.esrb_rating && <p>ESRB Rating: {props.game.esrb_rating.name}</p>}
        <a href={props.game.website}>{props.game.website}</a>
      </div>
      
      <div className="game-images">
        <img src={props.game.background_image} />
        <img src={props.game.background_image_additional} />
      </div>
    </div>
  )
}

export default Game