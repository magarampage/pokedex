import React from 'react'
import PropTypes from 'prop-types'

const backdrops = ({close}) => <div className="backdrops" onClick={close}></div>

backdrops.propTypes = {
  close: PropTypes.func
}

export default backdrops
