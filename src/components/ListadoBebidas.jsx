import React from 'react'
import useBebidasContext from '../hooks/useBebidasContext'

import Bebida from './Bebida'
import { Card, Row, Col } from 'react-bootstrap'

const ListadoBebidas = () => {

    const { bebidas } = useBebidasContext()

    return (
        <Row className='mt-3'>
            {bebidas && bebidas.map(bebida => (
                <Bebida 
                    key={bebida.idDrink}
                    bebida = {bebida}
                />
            ))}
        </Row>
    )
}

export default ListadoBebidas