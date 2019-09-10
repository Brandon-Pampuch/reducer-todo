import React from 'react';
import Todo from './Todo'

const toDoList = (props) => {

    const { state, completed } = props;
    return (
        <div>
            {
                state.map((cur, i) => {
                    return <Todo key={i} todo={cur} completed={completed} />
                })
            }
        </div>
    );
}

export default toDoList;