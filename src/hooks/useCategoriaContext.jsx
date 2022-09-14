import {useContext} from 'react'
import ContexCategoria from '../context/CategoriaProvider'

const useCategoriaContext = () => {
    return useContext(ContexCategoria)
}

export default useCategoriaContext
