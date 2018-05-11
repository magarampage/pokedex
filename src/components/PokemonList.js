import React from 'react'
import PropTypes from 'prop-types'
import Pagination from './Pagination'
import SinglePokemon from './SinglePokemon'
import {connect} from 'react-redux'

class PokemonList extends React.Component {
  state = {
    modal: false,
    elem: {}
  }

  showModal = (elem = {}) => {
    this.setState((prevState) => {
      return {
        modal: !prevState.modal,
        elem
      }
    })
  }

  render () {
    const list = this.props.pokemon.pokemonList.map((elem) => {
      return (
        <li key={elem.name} onClick={() => this.showModal(elem)}>
          <img src={elem.sprites.front_default} alt={elem.name}/>
          <p>{elem.name}</p>
        </li>
      )
    })

    const loading = <div className="pokeball is-animated"></div>

    return (
      <div className="pokemon-list">
        <p className='attention'>{this.props.pokemon.attention}</p>
        <ul>
          {this.props.pokemon.pokemonList.length > 0 ? list : loading}
        </ul>
        <Pagination/>
        {this.state.modal &&
        <SinglePokemon
          showModal={this.showModal}
          elem={this.state.elem}/>}
      </div>
    )
  }
}

PokemonList.propTypes = {
  pokemon: PropTypes.object,
  showModal: PropTypes.func,
  modal: PropTypes.bool
}

function mapStateToProps ({pokemon}, ownProps) {
  return {pokemon}
}

export default connect(mapStateToProps)(PokemonList)
