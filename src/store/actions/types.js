import axios from 'axios/index'
import { GET_TYPE, GET_TYPES, RESET_TYPES } from './actionTypes'

export const getTypes = () => {
  return async (dispatch, getState) => {
    try {
      const state = await getState()
      const {data} = await axios.get(
        `https://pokeapi.co/api/v2/type`)
      console.log(state)
      console.log(data.results)
      dispatch({
        type: GET_TYPES,
        payload: data.results
      })
    } catch (err) {
      console.log(err)
    }
  }
}

export const getType = (name) => {
  return {
    type: GET_TYPE,
    payload: name
  }
}

export const resetTypes = () => {
  return {
    type: RESET_TYPES
  }
}
