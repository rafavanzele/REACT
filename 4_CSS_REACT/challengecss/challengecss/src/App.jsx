import { useState } from 'react'
import Car from './components/Car'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const myCars = [
    {brand: 'VW', color: 'preto', year: 2005},
    {brand: 'GM', color: 'prata', year: 1996},
    {brand: 'Kia', color: 'amarelo', year: 2010},
    {brand: 'BMW', color: 'vermelho', year: 2024}
  ]

  return (
    <>
      <div>
        <h1>Meus Carros</h1>

        <div className="car_container">
          {myCars.map((car) => (
            <Car car={car}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
