import {useState, useEffect} from "react";

//4 - Custom hook
export const useFetch = (url) => {
    const [data, setData] = useState(null)

    //5- Refatorando POST
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFecth] = useState(false)

    //6- Estado de loading
    const [loading, setLoading] = useState(false)

    //7- Estado de ERRO
    const [error, setError] = useState(null)

    //8- Desafio 6 do curso
    const [itemId, setItemId] = useState(null)


    const httpConfig = (data, method) => {
        if (method === 'POST') {
            setConfig({
                method,
                Headers: {'Content-type': 'application/json'},
                body: JSON.stringify(data)
            })
            setMethod(method)
        } else if (method === 'DELETE') {
            setConfig({
                method,
                Headers: {'Content-type': 'application/json'},
            })
            setMethod(method)
            setItemId(data)
        }
    }

    useEffect(() => {
        const fetchData = async() => {

            //6- Estado de loading
            setLoading(true)

            //7- Estado de ERRO
            try {
                const res = await fetch(url)

                const json = await res.json()

                setData(json)
            } catch (error) {
                setError('Houve algum erro inesperado ao carregar os dados!')
            }

            setLoading(false)
        }

        fetchData()


    }, [url, callFetch])


    //5- Refatorando POST
    useEffect(() => {

        const httpREquest = async() => {

            let json

            if (method === 'POST') {

                let fetchOptions = [url, config]
    
                const res = await fetch(...fetchOptions)
    
                json = await res.json()
    
                
            } else if (method === 'DELETE') {

                const deleteUrl = `${url}/${itemId}`

                const res = await fetch(deleteUrl, config)

                json = await res.json()

                
            }

            setCallFecth(json)
        }

        httpREquest()

    }, [config, method, url])

    return {data, httpConfig, loading, error}


}