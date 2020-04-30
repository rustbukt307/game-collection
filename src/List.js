import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"
import "./App.css"


class List extends Component {
  handleClick = (e) => {
    const index = parseInt(this.props.match.params.index)
    window.location.replace(this.props.birds[index].homepage)
  }

  render() {

    const index = (parseInt(this.props.match.params.index))
    return (
      <div className="list">
        <h1 style={{textAlign: "center"}}>Coming Soon!</h1>
      </div>
    )
  }
}

export default withRouter(List)