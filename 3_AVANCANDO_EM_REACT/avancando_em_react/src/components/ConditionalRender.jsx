import React from 'react'
import { useState } from 'react'

const ConditionalRender = () => {
  const [x] = useState(true)
  
    return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for 'TRUE', sim!</p>}
    </div>
  )
}

export default ConditionalRender