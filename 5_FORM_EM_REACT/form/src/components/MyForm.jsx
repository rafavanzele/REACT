import { useState } from 'react'
import './MyForm.css'

const MyForm = ({user}) => {
    //3- Gerenciamento de Dados | 6- Controlled inputs
    const [name, setName] = useState(user? user.name : '')
    const [email, setEmail] = useState(user? user.email : '')

    //8- TextArea
    const [bio, setBio] = useState(user? user.bio : '')

    //9-Input Select
    const [role, setRole] = useState(user? user.role : '')

    const handleName = (e) => {
        setName(e.target.value)
    }

    //console.log(name)
    //console.log(email)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('enviando o formulário')
        console.log(name, email, bio, role)

        //7- Limpando formulários (é so colocar isso aqui debaixo em cada input do formulário) 
        setName('')
        setEmail('')
        setBio('')
        setRole('')
    }

  return (
    
    <div>
        
        {/*1- Criação de Form / 5- Envio de Form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome: </label>
                <input type="text" name='name' placeholder='Digite seu nome' onChange={handleName} value={name}/>
            </div>

             
             {/*1- Label Envolvendo o Input / 4- Simplificação de Manipulaçãpo de State*/}
             <label>
                <span>Email: </span>
                <input type="email" name='email' placeholder='Digite seu email' onChange={(e) => setEmail(e.target.value)} value={email}/>
             </label>


             {/*8- Text Area (usado pra descrições/fale sobre você, nos forms)*/}
             <label>
                <span>Fale Sobre Você</span>
                <textarea name="bio" cols="20" rows="6" placeholder='Fale sobre você' 
                onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
             </label>


            {/*9- Input Select*/}
            <label>
                <span>Função na empresa</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">Usuário</option>
                    <option value="admin">Administrador</option>
                    <option value="edit">Editor</option>
                </select>
            </label>
            
            
            <input type="submit" value={'Enviar'} />
        </form>
    </div>
  )
}

export default MyForm