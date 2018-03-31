import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions'
import PropsTypes from 'prop-types'

class Pagination extends React.Component {
  state = {
    loading: true
  }

  paginationHandler = (direction) => {
    this.setState(({loading}) => {
      return {loading: !loading}
    })
    this.props.handlePagination(direction)
  }

  componentWillUpdate ({pokemon: {next}}, nextState) {
    if (this.props.pokemon.next !== next) {
      this.setState(({loading}) => {
        return {loading: !loading}
      })
    }
  }

  render () {
    const {pokemon: {next, previous}} = this.props
    return (
      <div className='pagination'>
        {previous &&
        <span onClick={() => this.paginationHandler(previous)}>Previous</span>}
        {next &&
        <span onClick={() => this.paginationHandler(next)}>{this.state.loading ? ' loading' : 'Next'}</span>}
      </div>
    )
  }
}

Pagination.propTypes = {
  pokemon: PropsTypes.object,
  handlePagination: PropsTypes.func
}

function mapStateToProps ({pokemon}, ownProps) {
  return {pokemon}
}

export default connect(mapStateToProps, actions)(Pagination)
