import React, { Component } from 'react'
import axios from "axios"
import {withRouter} from "react-router-dom"
import Game from "./Game"

class FavoriteGame extends Component {
  constructor(props) {
    super(props)

    this.state = {
      game: {}
    }
  }

    async componentDidMount() {
      let url = "https://api.rawg.io/api/games/"
      let input = this.props.match.params.slug
      try {
        let response = await axios.get(`${url}${input}`)
        this.setState({
          game: response.data
        })
      }
      catch (e) {
        this.setState({error: "Game not found"})
      }    
    }

  render() {console.log(this.props)
    return (
      <div>
        {this.state.game.slug && <Game game={this.state.game} />}
      </div>
    )
  }
}

export default withRouter (FavoriteGame)
