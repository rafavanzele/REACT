//COMPONENTS
import firstComponent from './components/firstComponent';


//CSS

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>FUNDAMENTOS DE REACT</h1>
        <firstComponent/>
      </div>
      
    </>
  )
}

export default App