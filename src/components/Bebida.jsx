import React from 'react'
import { Card, Col, Button } from 'react-bootstrap'
import useBebidasContext from '../hooks/useBebidasContext'

const Bebida = ({ bebida }) => {

    const {handleModalClick, handleBebidaIdClick} = useBebidasContext()

    return (
        <Col md={6} lg={3}>
            <Card
                className='mb-4'

            >
                <Card.Img variant='top' src={bebida.strDrinkThumb} alt={`Imagen de ${bebida.strDrink}`} />
                <Card.Body>
                    <Card.Title 
                        className='p-2'
                    >
                        {bebida.strDrink}
                    </Card.Title>
                    <Button onClick={ () => { 
                        handleModalClick()
                        handleBebidaIdClick(bebida.idDrink)
                    }} 
                        variant='warning' 
                        className='w-100 text-uppercase'
                    >   
                        Ver receta
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Bebida