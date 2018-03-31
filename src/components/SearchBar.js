import React from 'react'
import PropTypes from 'prop-types'

const SearchBar = ({handleChange, findPokemon}) => {
  return (
    <form className='search' onSubmit={findPokemon}>
      <input
        type="text"
        placeholder="type pockemon"
        onChange={handleChange}/>
      <button type='submit'>find</button>
    </form>
  )
}

SearchBar.propTypes = {
  handleChange: PropTypes.func,
  findPokemon: PropTypes.func
}

export default SearchBar
