import React, { useReducer } from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import { initialState, todoReducer } from './reducers/todoReducer'
import './App.css';

function App() {

  const [state, dispatch] = useReducer(todoReducer, initialState)

  const submitTodo = (e, payload) => {
    const newTodo = {
      item: payload,
      completed: false,
      id: Date.now()
    }
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', payload: newTodo })
  }

  const clearAll = () => {
    dispatch({ type: 'CLEAR_TODO' })
  }

  const completed = (id) => {
    dispatch({ type: 'MARK_COMPLETED', payload: id })
  }

  const clearCompleted = () => {
    dispatch({ type: 'CLEAR_COMPLETED' })
  }


  return (

    <div className="App">
      <TodoList
        state={state}
        completed={completed}
      />
      <TodoForm
        submitTodo={submitTodo}
        clearAll={clearAll}
        clearCompleted={clearCompleted}
      />
    </div>
  );
}

export default App;
