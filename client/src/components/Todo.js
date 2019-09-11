import React, { useContext } from 'react';
import ToDoContext from '../contexts/TodoContext'

const ToDo = (props) => {

    const { todo } = props
    const { completed } = useContext(ToDoContext)

    return (
        <div onClick={() => completed(todo.id)}>
            <p style={completed ? { color: 'red' } : { color: 'black' }}>{todo.item}</p>
        </div>
    );
}

export default ToDo;