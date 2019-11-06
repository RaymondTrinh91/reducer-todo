import React, {useReducer} from 'react'



const Todo = ({item, id, completed, dispatch}) => {
console.log({item, id, completed, dispatch})
    return (
        <div
            className={`todo@${completed ? ' completed' : '' }`} 
            onClick={dispatch}>
            <h4>{item}</h4>
            <h3>Due:{id}</h3>
        </div>
    )
}

export default Todo