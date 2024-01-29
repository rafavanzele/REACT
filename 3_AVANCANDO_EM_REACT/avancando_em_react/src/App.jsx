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

  const cars = [
    {id: 1, brand:'GM', km: 115000, color: 'Prata', newCar: false},
    {id: 1, brand:'Kia', km: 0, color: 'Amarelo', newCar: true},
    {id: 1, brand:'Ferrari', km: 0, color: 'Preto', newCar: true}
  ]


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
        <CarDetails brand='VW' km={95000} color='Preto' newCar={false}/>
        
        {/* reaproveitando componentes */}
        <CarDetails brand='Fiat' km={95000} color='Branco' newCar={false}/>
        <CarDetails brand='Ford' km={0} color='Vermelho' newCar={true}/>

        {/* loop em array de ojetos (usando o modelo 'cars' dali de cima) */}
        {cars.map((car) => (
          <CarDetails brand={car.brand} km={car.km} color={car.color} newCar={car.newCar}/>
        ))}
      </div>

      

    </>
  )
}

export default App
