import { useState } from 'react'
import './App.css'

import Variosguardachuva from './assets/variosguardachuva.jpg'
import CarDetails from './components/CarDetails'
import ConditionalRender from './components/ConditionalRender'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'
import ShowUserName from './components/ShowUserName'


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

        <ManageData/>
        <ListRender/>
        <ConditionalRender/>
        {/* props */}
        <ShowUserName name="Rafael"/>
        {/* destructuring props */}
        <CarDetails brand='VW' km={95000} color='Preto'/>
      </div>

      

    </>
  )
}

export default App
