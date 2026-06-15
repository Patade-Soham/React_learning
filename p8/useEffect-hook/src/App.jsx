import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useEffect } from 'react'
import TimerComponent from './components/TimerComponent'


function App() {
  const [count, setCount] = useState(0)
  // var: 1
  // useEffect(() => {
  //   alert("asdfadf")

  // })
  

  //var:2
  // useEffect(() => {
  //   alert('I appear once')

  // }, [])
  
  // var : 3
  // useEffect(() => {
  //   alert('I update when count updates')
  // }, [count])

  // var : 4
  // for multiple dependencies
  
  // useEffect(() => {
  //   alert('count')
  
  //   return () => {
  //     alert('count updated')
  //   }
  // }, [count])
  

  // function handleClick(){
  //   setCount(count+1)
  // }

  return (
    <div>
      {/* <TimerComponent/> */}
      {/* <button onClick={handleClick}>Click me</button>
      <br />
      Count is {count} */}
    </div>
  )
}

export default App
