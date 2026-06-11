import React from 'react'
import hero from '../assets/hero.png'

const UserCard = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <img src={hero} alt="" />
      <p>description</p>
    </div>
  )
}

export default UserCard
