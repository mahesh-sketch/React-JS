import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './app/store'
import AddTodo from './Components/AddTodo'
import Todo from './Components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
    <AddTodo/>
    <Todo/>
    </Provider>
  )
}

export default App
