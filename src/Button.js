import React from 'react';
import "./App.css"

function Button(props) {
  return (
    <button className="add" onClick={props.addToFav}>
      {props.text}
    </button>
  )
}

export default Button