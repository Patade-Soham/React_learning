import React from 'react'

const Button = (props) => {
  return (
    <div>
        <p>you clicked {props.count} times</p>
      <button onClick={props.clickHandler}>Click Me</button>
    </div>
  )
}

export default Button
