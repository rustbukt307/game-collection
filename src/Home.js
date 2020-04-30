import React, { Component } from "react";
import axios from "axios"
import Game from "./Game"
import "./App.css"

class Home extends Component {
  constructor() {
    super()
    this.state = {
      error: null,
      game: null,
      input: ""
    }
  }

  async componentDidMount() {
    let url = "https://api.rawg.io/api/games/"
    let input = this.state.input
    try {
      let response = await axios.get(`${url}r-type`)
      this.setState({
        game: response.data
      })
    }
    catch (e) {
      this.setState({error: "Game not found"})
    }    
  }
  handleRequest = async (e) => {
    e.preventDefault()
    let url = "https://api.rawg.io/api/games/"
    let input = this.state.input
    try {
      let response = await axios.get(`${url}${input.split(" ").join("-").toLowerCase()}`)
      this.setState({
        game: response.data
      })
    }
    catch (e) {
      this.setState({error: "Game not found"})
    }    
  }

  handleInputChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }
  
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleRequest}>
          <input value={this.state.input} onChange={this.handleInputChange}/>
          <button>Search</button>
        </form>
        {this.state.game && <Game game={this.state.game} />}
      </div>
    )
  }
}

export default Home