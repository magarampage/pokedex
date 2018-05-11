import React from 'react'
import styled from 'styled-components'

const H1 = styled.header`
  background-color:  ${(props) => props.grey ? 'grey' : 'black'};
  color: ${(props) => props.theme.primary};
  padding: 3%;
`

const Header = (props) => {
  return (
    <H1 black>
      <h1>pokedex<span>11.05.2018</span></h1>
    </H1>
  )
}

export default Header
