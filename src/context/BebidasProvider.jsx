import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

const ContextBebidas = createContext()

const BebidasProvider = ({ children }) => {

    const [bebidas, setBebidas] = useState([])
    const [modal, setModal] = useState(false)
    const [bebidaId, setBedidaId] = useState(null)
    const [receta, setReceta] = useState({})
    const [cargando, setCargando] = useState(false)

    const consultarBebida = async datos => {
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`

            const { data } = await axios(url)
            setBebidas(data.drinks)

        } catch (error) {
            console.log(error);
        }
    }

    const consultarBebidaPorId = async () => {
        setCargando(true)
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`
            const {data} = await axios(url)
            setReceta(data.drinks[0])
        } catch (error) {
            console.log(error)
        } finally{
            setCargando(false)
        }
    }

    useEffect(() => {
        if (bebidaId) {
            consultarBebidaPorId()
        }
    }, [bebidaId])
    

    const handleModalClick = () => {
        setModal(!modal)
    }

    const handleBebidaIdClick = (id) => {
        setBedidaId(id)
    }

    return (
        <ContextBebidas.Provider
            value={{
                consultarBebida,
                bebidas,
                handleModalClick,
                modal,
                handleBebidaIdClick,
                receta,
                cargando
            }}
        >
            {children}
        </ContextBebidas.Provider>
    )
}

export { BebidasProvider }

export default ContextBebidas