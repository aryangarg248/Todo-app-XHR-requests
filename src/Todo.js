import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ToDoList from './ToDoList'
function Todo() {
    const initialState = JSON.parse(localStorage.getItem("todolist")) || []
    const [input, setinput] = useState("")
    const [todolist, settodolist] = useState(initialState)
    const [editTodo, seteditTodo] = useState(null)
    useEffect(() => {
        localStorage.setItem("todolist", JSON.stringify(todolist))
    }, [todolist])


    const updateTodo = (title, id) => {
        const newTodo = todolist.map((todo) =>
            todo.id === id ? { title} : todo
        )
        settodolist(newTodo)
        seteditTodo("")
    }

    useEffect(() => {
        if (editTodo) {
            setinput(editTodo.title)
        } else {
            setinput('')
        }
    }, [setinput, editTodo])

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (!editTodo) {
            settodolist([...todolist, { id: uuidv4(), title: input}]);
            setinput('')
        } else {
            updateTodo(input, editTodo.id)
        }
    }
    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <input className="form" type="text" placeholder="enter task" value={input} required onChange={(event) => setinput(event.target.value)} />
                <button className="button" type="submit">{!editTodo ? "ADD" : "OK"}</button>
            </form>
            <div>
                <ToDoList ToDoList={todolist} settodolist={settodolist} seteditTodo={seteditTodo} />
            </div>
        </div>
    )
}

export default Todo
