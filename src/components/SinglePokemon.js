import React from 'react'
import ReactDom from 'react-dom'
import Aux from '../hoc/AuxWrap'
import Backdrops from '../hoc/Backdrops'

const SinglePokemon = ({showModal, elem: {sprites, types, abilities, name}}) => {
  const spritesList = []
  for (let key in sprites) {
    if (sprites[key]) {
      spritesList.push(<img key={key} src={sprites[key]} alt=""/>)
    }
  }

  const typesList = types.map(({type: {name}}) => {
    return <span key={name}>{name}</span>
  })
  const abilityList = abilities.map(({ability: {name}}) => {
    return <span key={name}>{name}</span>
  })

  return ReactDom.createPortal(
    <Aux>
      <Backdrops close={showModal}/>
      <div className="single-pokemon">
        <div className="avatars">
          {spritesList}
        </div>
        <h1>{name}</h1>
        <p className="types">
          types:{typesList}
        </p>
        <p className="attributes">
          attributes: {abilityList}
        </p>
      </div>
    </Aux>,
    document.getElementById('portal')
  )
}

export default SinglePokemon
