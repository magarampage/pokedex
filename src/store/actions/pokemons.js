import axios from 'axios/index'
import { GET_POKEMON, FIND_POKEMON, HANDLE_PAGINATION } from './actionTypes'

export const getPokemon = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(
        'https://pokeapi.co/api/v2/pokemon/?limit=10')
      console.log(data)
      const pokemonList = await Promise.all(
        data.results.map(async (elem) => {
          let {data: newData} = await axios.get(elem.url)
          return newData
        })
      )
      dispatch({
        type: GET_POKEMON,
        payload: pokemonList,
        next: data.next,
        previous: data.previous
      })
    } catch (e) {
      console.log(e)
    }
  }
}

export const findPokemon = (name) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`)
      dispatch({
        type: FIND_POKEMON,
        payload: data
      })
    } catch (err) {
      dispatch({
        type: 'NOT_MATCH'
      })
    }
  }
}

export const handlePagination = (url) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(url)
      console.log(data)
      const pokemonList = await Promise.all(
        data.results.map(async (elem) => {
          let {data: newData} = await axios.get(elem.url)
          return newData
        })
      )
      dispatch({
        type: HANDLE_PAGINATION,
        payload: pokemonList,
        next: data.next,
        previous: data.previous,
        pagination: ''
      })
    } catch (e) {
      console.log(e)
    }
  }
}