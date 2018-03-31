import React from 'react'
import { connect } from 'react-redux'
import PropsTypes from 'prop-types'
import * as actions from '../store/actions'

const Tags = ({pokemon: {types}, getType, resetTypes}) => {
  const typesList = types.map(({name}) => {
    return <span onClick={() => { getType(name) }} key={name}>{name}</span>
  })

  return (
    <div className='tags'>
      {typesList}
      <button onClick={resetTypes}>reset</button>
    </div>
  )
}

Tags.propTypes = {
  pokemon: PropsTypes.object,
  getType: PropsTypes.func,
  resetTypes: PropsTypes.func
}

function mapStateToProps ({pokemon}, ownProps) {
  return {pokemon}
}

export default connect(mapStateToProps, actions)(Tags)
