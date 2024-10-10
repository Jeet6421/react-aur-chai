import { useState } from 'react'
import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/addTodo'

function App() {

  return (
    <>
     <h1>Learn about Redux ToolKit</h1>
     <AddTodo />
     <Todos />
    </>
  )
}

export default App
