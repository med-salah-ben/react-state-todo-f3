import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

export default class App extends Component {
  state={
    todos:[
      {id:1,title:"hello world",isCompleted:false},
      {id:2,title:"gomycode",isCompleted:false},
      {id:3,title:"welcome to nabeul",isCompleted:false}
    ]}

    done = (id)=>{
      this.setState({todos:[...this.state.todos.map(todo=>{
        if(todo.id===id){
          todo.isCompleted =! todo.isCompleted
        }return todo
      })]})
    }
    delTodo = (id)=>{
      this.setState({todos:[...this.state.todos.filter(todo=>
        todo.id !== id
        )]})
    }

    addTodo = (title)=>{
      const newTodo = {
        id : uuidv4(),
        title:title,
        isCompleted:false
      }
      this.setState({todos:[...this.state.todos,newTodo]})
    }
  
  render() {
    return (
      <div>
        <AddTodo addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} done={this.done} delTodo={this.delTodo} />
      </div>
    )
  }
}
