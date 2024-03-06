import React, { useContext } from 'react'
import { TodoContext } from '../../Context'
import './index.css'
import { TodoItem } from '../TodoItem'

const TodoList = () => {
    const context = useContext(TodoContext)
    return (
        <ul className='TodoList'>
            {context.todos.map(todo => (<TodoItem key={todo.id} todo={todo.text} />))}
        </ul>
    )
}

export { TodoList }