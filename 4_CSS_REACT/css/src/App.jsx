import { useState } from 'react'

import './App.css'
import MyComponents from './components/MyComponents'
import Title from './components/Title'

function App() {
  const [count, setCount] = useState(0)

  const n = 20

  const [name] = useState('Rafael')

  const redTitle = true

  return (
    <>
      <div>
        {/*CSS Global */}
        <h1>React com CSS</h1>
        
        
        {/*CSS de componentes */}
        <MyComponents/>

        <p>Este é o parágrafo do jsx</p>

        {/*CSS Inline */}
        <p style={{color: 'yellow', padding: '30px', backgroundColor: 'red'}}>Este elemento foi estilizado de forma inline</p>


        {/*CSS Inline Dinâmico*/}
        <h2 style={n < 15 ? ({color: 'green'}) : ({color: 'purple'})}>CSS Inline Dinâmico</h2>

        <h2 style={n > 15 ? ({color: 'green'}) : ({color: 'purple'})}>CSS Inline Dinâmico</h2>

        <h2 style={name === 'Rafael' ? ({color: 'green'}) : ({color: 'purple'})}>CSS Inline Dinâmico - TESTE NOME</h2>


        {/*Classes CSS dinâmicas */}
        <h2 className={redTitle ? 'red-title' : 'title'}>Este título tem classe CSS dinâmica</h2>


        {/*CSS Modules */}
        <Title/>
        <h2 className="my_title">Testando</h2>

      </div>

      
      
    </>
  )
}

export default App
