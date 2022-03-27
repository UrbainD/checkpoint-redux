import React, { useState } from 'react'
import { Button, Modal, Form } from "react-bootstrap";
import { BiEditAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { editAction } from '../JS/Actions/actions'
import { useSelector } from "react-redux";


const EditTodo = ({ todo }) => {
    const todoList = useSelector((state) => state.Todoreducer.todoList);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [editTextTodo, seteditTextTodo] = useState(todo.text)

    const submitTodo = () => {
        dispatch(editAction({ id: todo.id, text: editTextTodo }))
        handleClose();
    }
    return (

        <>
            <BiEditAlt size="30px" onClick={handleShow} />



            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modifier la tâche</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Tâche</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Entrer le nom de la tâche"
                                value={editTextTodo}
                                onChange={(e) => seteditTextTodo(e.target.value)}
                            />
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fermer
                    </Button>
                    <Button variant="primary" onClick={() => submitTodo()}>
                        Modifier
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default EditTodo