import React from 'react';
import "./App.css"

function Game(props) {
  console.log(props.game)
  if (props.game.redirect) return <h2>Did you mean {props.game.slug}?</h2>
  return (
    // Some items repeat or crash the page if they have a null value
    <div className="game-container">
      <div className="game-details">
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
        {/* {props.game.publishers.map(publishers => {
          return<p>Publisher: {publishers.name}</p>
        })} */}
        {/* <p>ESRB Rating: {props.game.esrb_rating.name}</p> */}
        <p>{props.game.website}</p>
      </div>
      
      <div className="game-info">
        <h2>{props.game.name_original}</h2>
        <p>About: {props.game.description_raw}</p>
      </div>
    
      <div className="game-images">
        <img src={props.game.background_image} />
        <img src={props.game.background_image_additional} />
      </div>
    </div>
  )
}

export default Game;