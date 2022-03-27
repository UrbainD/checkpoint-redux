import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../JS/Actions/actions";
import { InputGroup, FormControl, Button } from "react-bootstrap";


const AddTodo = () => {
    const [newTextTodo, setNewTextTodo] = useState("");
    const dispatch = useDispatch();

    const addtodo = () => {
        let newTodo = {
            text: newTextTodo,
            id: Math.random(),
            isDone: false,
        };
        dispatch(addTodo(newTodo));
    };

    return (

        <div style={{ width: "900px" }}>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="votre tâche"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    style={{ fontStyle: "initial", fontSize: '20px' }}
                    onChange={(e) => setNewTextTodo(e.target.value)}
                />
                <Button variant="outline-secondary" id="button-addon2" style={{height: "50px", width: "80px", border: "solid" }} onClick={() => addtodo()}>
                    Ajouter
                </Button>
            </InputGroup>
        </div>
    );
};

export default AddTodo;