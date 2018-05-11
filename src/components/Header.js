import React from 'react'
import styled from 'styled-components'

const H1 = styled.header`
  background-color:  grey;
  color: white;
  padding: 3%;
`

const Header = (props) => {
  return (
    <H1>
      <h1>pokedex<span>11.05.2018</span></h1>
    </H1>
  )
}

export default Header
