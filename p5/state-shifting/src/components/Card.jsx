import React from 'react'

const Card = (props) => {
  return (
    <div>
      <input type="text" onChange={(e)=>props.setName(e.target.value)} />
      <br />
      {props.name}
    </div>
  )
}

export default Card
