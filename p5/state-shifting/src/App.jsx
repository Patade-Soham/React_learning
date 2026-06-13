import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  const [name,setName] = useState('')

  return (
  <div className="container">
    <Card name={name} setName={setName}/>
    <p>I am from parent</p>
    {name}
  </div>
  )
}

export default App
