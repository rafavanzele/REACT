const TemplateExpressions = () => {

    const name = 'Rafael';

    const data = {
        age: 37,
        job: 'webdeveloper',
    }

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como {data.job} e tem {data.age} anos</p>
        </div>
    )


}

export default TemplateExpressions;