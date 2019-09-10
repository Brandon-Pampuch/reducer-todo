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
    //will take same action every time and different payload from form
  }

  return (

    <div className="App">

      <TodoList state={state} />
      <TodoForm submitTodo={submitTodo} />


    </div>
  );
}

export default App;
