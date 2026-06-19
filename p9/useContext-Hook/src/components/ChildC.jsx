import React, { useContext } from 'react'
//import { UserContext } from '../App'
import { UserTheme } from '../App'
const ChildC = () => {
    const {theme, setTheme} =  useContext(UserTheme);
    function toggleBtn(){
        if(theme=='light'){
            setTheme('dark')
        }else {
            setTheme('light')
        }
        

    }
  return (
    <div >
      <button onClick={toggleBtn}>Change Theme</button>
    </div>
  )
}

export default ChildC
