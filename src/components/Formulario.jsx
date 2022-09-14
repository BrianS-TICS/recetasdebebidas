import { useState } from 'react'
import { Button, Form, Row, Col, Alert} from 'react-bootstrap'
import useCategoriaContext from '../hooks/useCategoriaContext'
import useBebidasContext from '../hooks/useBebidasContext'

const Formulario = () => {

    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    })

    const [alerta, setAlerta] = useState('')

    // Uso de contexts
    const { categorias } = useCategoriaContext()
    const { consultarBebida, bebidas } = useBebidasContext()

    const handleSubmit = e => {
        e.preventDefault()
        if (Object.values(busqueda).includes('')) {
            setAlerta('Todos los campos son obligatorios')
            return
        }
        setAlerta('')
        consultarBebida(busqueda)
    }

    return (
        <Form
            onSubmit={handleSubmit}
        >
            {alerta && <Alert variant='danger' className='text-center'>{alerta}</Alert>}
            <Row>
                <Col md={6}>
                    <Form.Group className='mb-3'>
                        <Form.Label
                            htmlFor='nombre'
                        >
                            Nombre bebida
                        </Form.Label>
                        <Form.Control
                            id='nombre'
                            type='text'
                            placeholder='Ej: Tequila, Vodka, etc'
                            name="nombre"
                            value={busqueda.nombre}
                            onChange={e => {
                                setBusqueda({
                                    ...busqueda,
                                    [e.target.name]: e.target.value
                                })
                            }}
                        >

                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className='mb-3'>
                        <Form.Label
                            htmlFor='categoria'
                        >
                            Categoria
                        </Form.Label>
                        <Form.Select
                            id='categoria'
                            name='categoria'
                            value={busqueda.categoria}
                            onChange={e => setBusqueda({
                                ...busqueda,
                                [e.target.name]: e.target.value
                            })}
                        >
                            <option> -- Selecciona categoria --</option>
                            {categorias.map(categoria => (
                                <option
                                    key={categoria.strCategory}
                                    value={categoria.strCategory}
                                >
                                    {categoria.strCategory}
                                </option>
                            ))}

                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row className='justify-content-end'>
                <Col md={3}>
                    <Button
                        type='input'
                        variant='danger'
                        className='text-uppercase w-100'
                    >
                        Buscar bebidas
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default Formulario