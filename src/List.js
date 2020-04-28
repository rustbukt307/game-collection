import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"


class List extends Component {
  handleClick = (e) => {
    const index = parseInt(this.props.match.params.index)
    window.location.replace(this.props.birds[index].homepage)
  }
  render() {

    const index = (parseInt(this.props.match.params.index))
    return (
      <div className="list">
        <img src={this.props.birds[index].image}></img>
        <div className="birdInfo">
          <h2>{this.props.birds[index].name}</h2>
          <p>({this.props.birds[index].genus})</p>
          <p>{this.props.birds[index].conservationStatus}</p>
          <Link>
            <button onClick={this.handleClick} type="button"><strong>Read More</strong></button>
          </Link>
        </div>
      </div>
    )
  }
}

export default withRouter(List)