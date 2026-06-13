import { useState } from 'react'
import LoginBtn from './components/LoginBtn'
import LogoutBtn from './components/LogoutBtn'

function App() {
  const [isLogin, setLogin] = useState(false)

  return (
    <div>
      {isLogin ? (
        <LogoutBtn setLogin={setLogin} />
      ) : (
        <LoginBtn setLogin={setLogin} />
      )}
    </div>
  )
}

export default App