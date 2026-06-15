import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  function handler(e){
    e.preventDefault()
    alert('button clicked ')
  }
  function handleMouse(){
    alert('js hovered')
  }
  return (
    <div>
      <button onClick={handler}>click</button>
      <p onMouseOver={handleMouse}>I am a paragraph</p>
      <input type="text" onChange={(e)=>console.log(e.target.value)} />
      <form onSubmit={handler}>
        <button type='submit'>Submit</button>
      </form>
    </div>

  )
}

export default App
