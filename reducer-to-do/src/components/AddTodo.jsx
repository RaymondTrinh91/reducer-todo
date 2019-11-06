import React, { useState, useReducer } from 'react'
import { initialState, reducer } from '../reducers/reducer'

import TodoList from './TodoList'

const AddTodo = () => {
    const [todo, setTodo] = useState('')
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleChange = e => {
        console.log(e.target.value)
        setTodo(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch({ type: "ADD_TODO", payload: todo })
        setTodo('')
        console.log(state)
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        name="item"
                        placeholder="Add a new todo"
                        type="text"
                        value={todo}
                        onChange={handleChange}
                    />
                    <button type="submit">Add Todo</button>
                </form>
                <button 
                    onClick={() => dispatch({ type:"DELETE_COMPLETED" })}>
                        Delete Completed
                    </button>
            </div>
            <div>
                <TodoList state={state} dispatch={dispatch} />
            </div>
        </div>
    )
}

export default AddTodo