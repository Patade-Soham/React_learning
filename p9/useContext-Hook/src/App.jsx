import './App.css'
import {useState} from 'react'
import {createContext, useContext} from 'react'
import ChildA from './components/ChildA';

//create context
//const UserContext = createContext();
//Wrap all child in provider
//Pass Value
// consume
const UserTheme = createContext()


function App() {
  //const [user,setUser] = useState({name : "soham"});
  const [theme, setTheme] = useState('light');

  return (
    <div>
      {/* <UserContext.Provider value={user}>
        <ChildA/>
      </UserContext.Provider> */}
        <UserTheme.Provider value={{theme,setTheme}}>
          <div id="container"  style ={{backgroundColor:theme==='light'?'beige':'black'}}>
            <ChildA />
          </div>

        </UserTheme.Provider>


    </div>
  )
}

export default App
//export {UserContext}
export {UserTheme}