import { useState } from 'react'
import './App.css'

import Variosguardachuva from './assets/variosguardachuva.jpg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>
          AVANÇANDO EM REACT
        </h1>

        {/* IMG EM PUBLIC */}
        <div>
            <img src="/guardachuva.jpg" alt="noite de chuva em tóquio" />
        </div>


        {/* IMG EM ASSETS (O IMPORT TA LA EM CIMA)*/}
        <div>
          <img src={Variosguardachuva} alt="varios guarda chuva" />
        </div>

      </div>

      

    </>
  )
}

export default App
