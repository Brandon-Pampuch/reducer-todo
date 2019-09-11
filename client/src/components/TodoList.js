import React from 'react';
import Todo from './Todo'

const toDoList = (props) => {

    const { state } = props;
    return (
        <div>
            {
                state.map((cur, i) => {
                    return <Todo key={i} todo={cur} />
                })
            }
        </div>
    );
}

export default toDoList;