import { useState } from 'react'

import './App.css'
import MyForm from './components/MyForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/*1- Criação de Form */}
      <h2>Formulários</h2>
      <MyForm user={{name: 'Moisés', email: 'moises@gmail.com', bio: 'sou programador', role: 'edit' }}/>
    </>
  )
}

export default App
