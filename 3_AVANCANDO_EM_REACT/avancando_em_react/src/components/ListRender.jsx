import {useState} from 'react'

const ListRender = () => {
  
  const [list] = useState(['Rafael', 'Bruna', 'Jair', 'Sueli', 'Thiago'])
  
    return (
        <div>
            <ul>
                {list.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListRender