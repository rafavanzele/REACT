//COMPONENTS
import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions'

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
        <FirstComponent />
        <TemplateExpressions/>
      </div>
    </>
  )
}

export default App
