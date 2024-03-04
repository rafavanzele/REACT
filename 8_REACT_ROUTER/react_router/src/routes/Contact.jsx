import { Link } from "react-router-dom"

const Contact = () => {
  return (
    <div>
        <h1>Página de Contatos</h1>
        
        {/*5- Páginas aninhadas (nested routes)- identificador unico*/}
        <p>
          <Link to={"/contact/1"}>Página de Contato 1</Link>
        </p>

        <p>
          <Link to={"/contact/2"}>Página de Contato 2</Link>
        </p>

        <p>
          <Link to={"/contact/3"}>Página de Contato 3</Link>
        </p>

    </div>
  )
}

export default Contact