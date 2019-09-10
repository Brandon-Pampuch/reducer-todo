import React from 'react';

const toDoList = (props) => {

    const { state } = props;
    return (
        <div>
            {
                state.map((cur, i) => {
                    return <h1 key={i}>{cur.item}</h1>
                })
            }
        </div>
    );
}

export default toDoList;