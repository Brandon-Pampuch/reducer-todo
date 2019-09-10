import React from 'react';
import { todoReducer } from '../reducers/todoReducer';

const ToDo = (props) => {

    const { completed, todo } = props




    return (
        <div onClick={() => completed(todo.id)}>
            <p style={todo.completed ? { color: 'red' } : { color: 'black' }}>{todo.item}</p>
        </div>
    );
}

export default ToDo;