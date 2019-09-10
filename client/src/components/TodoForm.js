import React, { useState } from 'react';

const TodoForm = (props) => {

    const [todo, setTodo] = useState("")

    const { submitTodo } = props

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
        </div>

    );
}

export default TodoForm;