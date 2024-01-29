

const CarDetails = ({brand, km, color, newCar}) => {
  return (
    <div>
        <h1>Destructuring Props:</h1>
        <h2>Detalhes do Carro:</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>Km: {km}</li>
            <li>Cor: {color}</li>
        </ul>

        {newCar && <p>Esse carro é novo</p>}

    </div>
  )
}

export default CarDetails