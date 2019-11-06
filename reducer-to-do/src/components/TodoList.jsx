import React from 'react'


import Todo from './Todo'

const TodoList = ({ state, dispatch }) => {
    console.log(state)

    // const toggleCompleted = id => {

    //     state.map(state => {
    //         if (id === state.id) {
    //             dispatch({
    //                 type: "FINISHED_TODO",
    //                 payload: !state.completed
    //             })
    //         } else {
    //             return state
    //         }
    //     }
    // }
    
    return (
        <div>
            {state.map(todo => (
                <Todo 
                    dispatch={() => dispatch({ type:"FINISHED_TODO", payload: todo.id })}
                    item={todo.item}
                    key={todo.id}
                    id={todo.id}
                    completed={todo.completed} />
            ))}

        </div>
    )
}

export default TodoList