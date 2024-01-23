const Challenge = () => {

    const x = 6 
    const y = 12

    return (
        <div>
            <p>X: {x}</p>
            <p>Y: {y}</p>

            <button onClick={() => console.log(x + y)}>Clique aqui pra somar!</button>

        </div>
    )

}

export default Challenge