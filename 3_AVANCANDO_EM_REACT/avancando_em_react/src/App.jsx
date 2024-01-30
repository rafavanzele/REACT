import { useState } from 'react'
import './App.css'

import Variosguardachuva from './assets/variosguardachuva.jpg'
import CarDetails from './components/CarDetails'
import ChangeMessageState from './components/ChangeMessageState'
import ConditionalRender from './components/ConditionalRender'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Fragments from './components/Fragments'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'
import Message from './components/Message'
import ShowUserName from './components/ShowUserName'
import UserDetails from './components/UserDetails'


function App() {
  const [count, setCount] = useState(0)

  const cars = [
    {id: 1, brand:'GM', km: 115000, color: 'Prata', newCar: false},
    {id: 2, brand:'Kia', km: 0, color: 'Amarelo', newCar: true},
    {id: 3, brand:'Ferrari', km: 0, color: 'Preto', newCar: true}
  ]

  function showMessage () {
    console.log('Evento do componente pai')
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  const user = [
    {nome: 'Rafael', idade: 16, profissao: 'estudante'},
    {nome: 'Luiza', idade: 25, profissao: 'advogada'},
    {nome: 'Pedro', idade: 31, profissao: 'professor'},
    {nome: 'Ana', idade: 17, profissao: 'estudante'},
    {nome: 'José', idade: 39, profissao: 'gari'}
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
          <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} newCar={car.newCar}/>
        ))}

        {/* fragment */}
        <Fragments/>

        {/* children */}
        {/*quando quiser usar html dentro do jsx deve abrir e fechar a tag igual abaixo */}
        <Container>
          <p>E esse é o conteúdo do container</p>
        </Container>

        {/* executar função */}
        <ExecuteFunction myFunction={showMessage}/>

        {/* state lift */}
        <Message msg={message}/>
        <ChangeMessageState handleMessage={handleMessage}/>

        {/*desafio 4 userdetails */}
        {user.map((user) => (
          <UserDetails nome={user.nome} idade={user.idade} profissao={user.profissao}/>
        ))}

      </div>

      

    </>
  )
}

export default App
