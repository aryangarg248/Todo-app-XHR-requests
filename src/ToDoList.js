import React from 'react'

const ToDoList = ({ ToDoList, settodolist , seteditTodo }) =>{
    const handleDelete = ({id})=>{
        settodolist(ToDoList.filter((todo)=> todo.id !== id))
    }
    const handleEdit = ({id})=>{
        const gettodo = ToDoList.find((todo)=> todo.id === id)
        seteditTodo(gettodo)
    }
    return (
        <div>
            {ToDoList.map((todo) => (
                    <li key={todo.id}>
                        <input className = "form" type="text" value={todo.title} onChange={(event) => event.preventDefault()} />
                        <div>
                            <button className = "button" onClick = {()=> handleEdit(todo)}>
                                edit
                            </button>
                            <button className = "button" onClick = {()=> handleDelete(todo)}>
                                delete
                            </button>
                        </div>
                    </li>
            ))}
        </div>
    )
}

export default ToDoList
