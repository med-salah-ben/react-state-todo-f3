import React, { Component } from 'react'

export default class AddTodo extends Component {
    state={
        title:""
    }
    handleTitle=(e)=>{
       this.setState({[e.target.name]:e.target.value})
    }

    HandleSubmit = (e)=>{
        e.preventDefault();
        this.props.addTodo(this.state.title)
        this.setState({title:""})
    }

  render() {
    return (
      <div>
        <form onSubmit={this.HandleSubmit}>
            <input type="text" placeholder='AddTodo...' name='title' value={this.state.title} onChange={this.handleTitle} />
            <input type="submit" value="submit"/>
        </form>
      </div>
    )
  }
}
