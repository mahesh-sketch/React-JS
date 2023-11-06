import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Router, RouterProvider, createBrowserRouter, createRoutesFromElements,Route} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About Us/Aboutus.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/Users/User.jsx'
import Github, { githubInfoCollector } from './Components/Github/Github.jsx'


//Method 1 nested 
// const router = createBrowserRouter([
//   {
//     path : '/',
//     element:<Layout/>,
//     children:[
//     {
//       path: "",
//       element:<Home/>,
//     },
//     {
//       path:"about",
//       element:<About/>
//     },
//     {
//       path:"contact",
//       element:<Contact/>
//     }
//   ]
//   }
// ])


//Method 2 suitable method 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Layout/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='contact' element={<Contact/>}></Route>
      <Route 
      loader={githubInfoCollector}
      path='github' element={<Github/>}></Route>
      {/* <Route path='user/:userid' element={<User/>}></Route> */}
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
