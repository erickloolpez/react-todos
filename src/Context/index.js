import React, { createContext, useState } from 'react'

export const TodoContext = createContext()

export const TodoContextProvider = ({ children }) => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React', isCompleted: false },
        { id: 2, text: 'Learn Python', isCompleted: false },
        { id: 3, text: 'Learn IA', isCompleted: true },
        { id: 4, text: 'Learn Java', isCompleted: true },
    ])
    return (
        <TodoContext.Provider value={{
            todos,
            setTodos
        }}>
            {children}
        </TodoContext.Provider>
    )
}
