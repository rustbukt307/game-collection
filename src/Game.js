import React from 'react';

function Game(props) {
  console.log(props.game)
  if (props.game.redirect) return <h2>Did you mean {props.game.slug}?</h2>
  return (
    <>
      <div className="gameDetails">
        <p>{props.game.released}</p>
        {/* <p>{props.game.parent_platforms}</p> */}
        {/* <p>{props.game.genres}</p> */}
        {/* <p>{props.game.developers}</p> */}
        {/* <p>{props.game.publishers}</p> */}
        {/* <p>{props.game.esrb_rating}</p> */}
        <p>{props.game.website}</p>
      </div>
      
      <div className="gameInfo">
        <h2>{props.game.name_original}</h2>
        <p>About: {props.game.description_raw}</p>
      </div>
    
      <div className="gameImages">
        <img src={props.game.background_image} />
        <img src={props.game.background_image_additional} />
      </div>
    </>
  )
}

export default Game;