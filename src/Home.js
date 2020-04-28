import React, { Component } from "react";
import { Link } from "react-router-dom"
import axios from "axios"
import Game from "./Game"
class Home extends Component {

  constructor() {
    super()
    this.state = {
      error: null,
      game: null,
      input: ""
    }
  }

  // let valueArray = value.split(' ') //removes spaces in search bar
  // value = valueArray.join('-') //inserts a dash which the API requires
  // value = value.toLowerCase() //removes uppercase characters so names are properly input into the URL

  async componentDidMount() {
    let url = "https://api.rawg.io/api/games/"
    let input = this.state.input
    try {
      let response = await axios.get(`${url}rtype`)
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
      let response = await axios.get(`${url}${input}`)
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
        {this.state.game && <Game game={this.state.game}/>}
      </div>
    )
  }
}

export default Home