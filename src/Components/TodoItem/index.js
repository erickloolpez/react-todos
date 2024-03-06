import React from 'react'
import './index.css'

const TodoItem = ({todo}) => {
    return (
        <li className='TodoItem'>{todo}</li>
    )
}

export {TodoItem}