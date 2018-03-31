import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Footer from './components/Footer'
import Header from './components/Header'
import PokemonList from './components/PokemonList'
import SearchBar from './components/SearchBar'
import Tags from './components/Tags'
import * as actions from './store/actions'

class App extends Component {
  state = {
    pokemonName: ''
  }
  handleName = (e) => {
    const value = e.target.value.toLowerCase()
    this.setState({pokemonName: value})
  }
  findPokemon = (e) => {
    e.preventDefault()
    e.target.reset()
    this.props.findPokemon(this.state.pokemonName)
  }

  componentDidMount () {
    this.props.getPokemon()
    this.props.getTypes()
  }

  render () {
    return (
      <div className="container">
        <Header/>
        <SearchBar
          handleChange={this.handleName}
          findPokemon={this.findPokemon}/>
        <Tags getType={this.props.getType}/>
        <PokemonList/>
        <Footer/>
      </div>
    )
  }
}

App.propTypes = {
  getPokemon: PropTypes.func,
  getTypes: PropTypes.func,
  getType: PropTypes.func,
  findPokemon: PropTypes.func
}

function mapStateToProps ({pokemon}, ownProps) {
  return {pokemon}
}

export default connect(mapStateToProps, actions)(App)
