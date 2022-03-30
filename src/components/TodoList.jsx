import React from 'react'
import Todo from './Todo'
const TodoList = ({todos, done,delTodo}) => {
    console.log(todos)
  return (
    <div>
        {todos.map(el=>(
            <Todo todo={el} key={el.id} done={done} delTodo={delTodo} />
        ))}
    </div>
  )
}

export default TodoList