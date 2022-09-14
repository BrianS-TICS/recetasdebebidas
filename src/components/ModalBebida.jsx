import React from 'react'
import { Modal, Image } from 'react-bootstrap'
import useBebidasProvider from '../hooks/useBebidasContext'

const ModalBebida = () => {

    const { handleModalClick, modal, receta, cargando } = useBebidasProvider()

    const mostrarIngedientes = () => {
        let ingredientes = []
        for (let i = 1; i < 16; i++) {
            if (receta[`strIngredient${i}`]) {
                ingredientes.push(
                    <li key={`strIngredient${i}`}>{receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredientes
    }

    return (
        !cargando && (
            <Modal show={modal} onHide={handleModalClick}>
                <Image
                    src={receta.strDrinkThumb}
                    alt={`Imgen de ${receta.strDrink}`}
                />
                <Modal.Header>
                    <Modal.Title>
                        {receta.strDrink}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='p-3'>
                        <h2>Instrucciones</h2>
                        {receta.strInstructions}
                        <h2>Ingredientes y cantidades</h2>
                        {mostrarIngedientes()}
                    </div>
                </Modal.Body>
            </Modal>
        )
    )
}

export default ModalBebida