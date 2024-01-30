

const UserDetails = ({nome, idade, profissao}) => {
  return (
    <div>
        <ul>
            <li>Nome: {nome}</li>
            <li>Idade: {idade}</li>
            <li>Profissão: {profissao}</li>
        </ul>

        {idade >=  18  && <p>Pode tirar CNH</p>}

        <br></br>

    </div>
  )
}

export default UserDetails