import {
  GET_POKEMON,
  FIND_POKEMON,
  GET_TYPES,
  GET_TYPE, RESET_TYPES, HANDLE_PAGINATION
} from '../actions/actionTypes'

const initialState = {
  pokemonListInitial: [],
  pokemonList: [],
  types: [],
  attention: '',
  next: null,
  previous: null
}

export default (state = initialState, {type, payload, next, previous}) => {
  console.log(next, previous)
  switch (type) {
    case GET_POKEMON:
      return {
        ...state,
        pokemonList: [...payload],
        pokemonListInitial: [...payload],
        next,
        previous
      }
    case FIND_POKEMON:
      return {
        ...state,
        pokemonList: [payload],
        attention: initialState.attention
      }
    case 'NOT_MATCH':
      return {...state, attention: 'no matches'}
    case GET_TYPES:
      return {...state, types: [...payload]}
    case GET_TYPE:
      return sortByTag(state, payload)
    case RESET_TYPES:
      return {
        ...state,
        pokemonList: state.pokemonListInitial,
        attention: ''
      }
    case HANDLE_PAGINATION:
      return {
        ...state,
        pokemonList: [...payload],
        pokemonListInitial: [...payload],
        next,
        previous
      }
    default:
      return state
  }
}

function sortByTag (state, payload) {
  const list = state.pokemonList.slice()
  let filter = list.filter(({types}) => {
    return types.some(({type}) => {
      console.log(type.name, payload)
      return type.name === payload
    })
  })
  if (filter.length < 1) {
    return {...state, attention: 'no matches'}
  }
  return {...state, pokemonList: [...filter], attention: ''}
}
