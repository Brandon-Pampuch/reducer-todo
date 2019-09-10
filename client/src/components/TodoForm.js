import React, { useState } from 'react';

const TodoForm = (props) => {

    const [todo, setTodo] = useState("")

    const { submitTodo, clearAll } = props

    const textChangeHandler = (e) => {
        const newTodo = e.target.value
        setTodo(newTodo)
    }

    return (
        <div>
            <form onSubmit={(e) => submitTodo(e, todo)}>
                <input
                    type={"text"}
                    placeholder={"todo"}
                    name={"todo"}
                    onChange={(e) => textChangeHandler(e)}
                    value={todo}
                />
                <button>add todo</button>

            </form>
            <button onClick={clearAll}>Clear all</button>
        </div>

    );
}

export default TodoForm;