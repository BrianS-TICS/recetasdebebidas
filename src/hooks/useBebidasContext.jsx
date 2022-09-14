import {useContext} from 'react'
import ContextBebidas from '../context/BebidasProvider'

const useBebidasContext = () => {
    return useContext(ContextBebidas)
}

export default useBebidasContext
