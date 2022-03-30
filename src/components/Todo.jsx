import React, { Component } from 'react'

export default class Todo extends Component {

    getStyle = ()=>{
        return{
            textDecoration: this.props.todo.isCompleted ? "line-through":"none",
            background:"#f6f6f6",
            color:"black",
            border:"2px black solid",
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            margin:"10px 600px"
        }
    }

  render() {

    const {id,title} = this.props.todo;

    return (
      <div style={this.getStyle()}>
          
          <input type="checkbox" onChange={this.props.done.bind(this,id)}  />
            <h2><bold> {title} </bold></h2>
          <button className="btn" onClick={this.props.delTodo.bind(this,id)}>X</button>  
      </div>
    )
  }
}
