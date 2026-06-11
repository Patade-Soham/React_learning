import { useState } from 'react'
import UserCard from './components/UserCard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <UserCard name="som" />
      <UserCard name="draco"/>
      <UserCard name="teddu"/>
    </div>

  )
}

export default App
