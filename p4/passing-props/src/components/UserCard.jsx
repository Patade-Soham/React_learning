import React from 'react'

const UserCard = (props) => {
  return (
    <div>
      {props.name}
      {props.children}
    </div>
  )
}

export default UserCard
