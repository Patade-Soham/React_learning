import './App.css'
import {createBrowserRouter, Router, RouterProvider} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import ParamComo from './components/ParamComo';
import Courses from './components/Courses';
import MockTest from './components/MockTest';
import Reports from './components/Reports';

const router = createBrowserRouter(
  [
    {path:"/",
      element:  <div> 
            <Navbar/>
        <Home/>
        </div>
    },
    {path:"/about",
      element: <div> 
            <Navbar/>
        <About/>
        </div>},
    {path:"/dashboard",
      element: <div> 
            <Navbar/>
        <Dashboard/>
        
        </div>,
        children:[
          {path:"courses",
            element:<Courses/>
          },
          {
            path:'mocks-tests',
            element:<MockTest/>
          },
          {
            path:"reports",
            element:<Reports/>
          },
        ]
        },
    {
      path:"/student/:id",
      element:
      <div>
        <Navbar/>
        <ParamComo/>
      </div>
    }
  ]
)  ;
function App() {

  return (
   <div>
    <RouterProvider router ={router}/>

   </div>
  )
}

export default App
