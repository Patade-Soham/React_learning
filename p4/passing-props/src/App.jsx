import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserCard from './components/UserCard'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  function clickHandler(){
    setCount(count+1);
  }


  return (
    <div className="container" >
      <Button clickHandler={clickHandler} count={count}/>

    </div>
  )
}

export default App
