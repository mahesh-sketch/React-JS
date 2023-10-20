import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function Mahesh(){
  return (
    <>
     <h1>Mahesh kumar Dash</h1>
    </>
  )
}

/*const ReactElement = {
  type : 'a',
  props: {
      href: 'https://google.com',
      target: '_blank',
  },
  children: 'Click me to visit google'
}*/

const ReactElement = React.createElement(
  'a',
  {
    href : 'https://google.com',target: '_blank'},
    'click me to visit google'
)

const NewReactElement = (
  <a href="https://google.com" target="_blank">Click me to visit google</a>
)



ReactDOM.createRoot(document.getElementById('root')).render(
  ReactElement
)
