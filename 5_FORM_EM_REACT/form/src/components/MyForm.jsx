import { useState } from 'react'
import './MyForm.css'

const MyForm = () => {
    //Gerenciamento de Dados
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    const handleName = (e) => {
        setName(e.target.value)
    }

    //console.log(name)
    //console.log(email)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('enviando o formulário')
        console.log(name, email)
    }

  return (
    
    <div>
        
        {/*1- Criação de Form / 5- Envio de Form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome: </label>
                <input type="text" name='name' placeholder='Digite seu nome' onChange={handleName}/>
            </div>

             
             {/*1- Label Envolvendo o Input / 4- Simplificação de Manipulaçãpo de State*/}
             <label>
                <span>Email: </span>
                <input type="email" name='email' placeholder='Digite seu email' onChange={(e) => setEmail(e.target.value)}/>
             </label>
            
            
            <input type="submit" value={'Enviar'} />
        </form>
    </div>
  )
}

export default MyForm