import React from 'react'
import { useState } from 'react'

const ConditionalRender = () => {
  const [x] = useState(true)

  const [name] = useState('Rafael')
  
    return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for 'TRUE', sim!</p>}


        <h1>IF Ternário</h1>
        {name === 'Rafael'? (
            <div>
                <p>O nome é Rafael</p>
            </div>
        ) : (
            <div>
                <p>Nome não encontrado!</p>
            </div>
        )}


    </div>


  )
}

export default ConditionalRender