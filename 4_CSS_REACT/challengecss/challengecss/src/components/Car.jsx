import styles from './Car.module.css'

const Car = ({car}) => {
  return (
    <div className={styles.card}>
        <h1>{car.brand}</h1>
        <p>Cor: {car.color}</p>
        <p>Ano: {car.year}</p>
    </div>
  )
}

export default Car