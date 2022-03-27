import React from "react";
import { useSelector } from "react-redux";
import TodoCard from "./TaskCard";


const TodoList = ({ done, unDone }) => {
    const todoList = useSelector((state) => state.Todoreducer.todoList);


    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            {done === unDone
                ? todoList.map((todo) => (
                    <ul className="todo-list">
                        <TodoCard todo={todo} />
                    </ul>
                ))
                : done
                    ? todoList
                        .filter((todo) => todo.isDone)
                        .map((todo) => (
                            <ul className="todo-list">
                                <TodoCard todo={todo} />
                            </ul>
                        ))
                    : todoList
                        .filter((todo) => todo.isDone === false)
                        .map((todo) => (
                            <ul className="todo-list">
                                <TodoCard todo={todo} />
                            </ul>
                        ))}
        </div>
    );
};

export default TodoList;