import React, { useReducer } from 'react'
import { reducer, initialState } from '../reducers/reducer'

import Todo from './Todo'

const TodoList = ({ state }) => {
    const [, dispatch] = useReducer(reducer, state)
    console.log(state)
    return (
        <div>
            {state.map(todo => (
                <Todo
                    dispatch={() => {
                        dispatch({
                            type:"FINISHED_TODO"
                        })
                    }}
                    item={todo.item}
                    key={todo.id}
                    id={todo.id} 
                    completed={todo.complete}/>
            ))}
            
        </div>
    )
}

export default TodoList