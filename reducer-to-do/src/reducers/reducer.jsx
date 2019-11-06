import React from 'react'

export const initialState = [
    {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
    }
]

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            if(action.payload.length === 0){
                return state
            } else { 
                return [...state, {
                item: action.payload,
                completed: false,
                id: Date.now()
            }
        ]};
        case "FINISHED_TODO":
                return [...state, {
                    completed: action.payload
                }]
        default:
            return state
    }
}