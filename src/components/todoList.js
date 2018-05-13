import React, {Component} from 'react';
import {connect} from 'react-redux';

import TodoItem from './todoItem';

class TodoList extends Component {
  renderTodoList = (todoList) => {
    if (todoList === undefined || todoList.length === 0) {
      return (<div>Nothing here</div>)
    }
    
    return (
      todoList.map((todoText, index) => {
        return (
          <div className="card todoItem" key={index}>
            <TodoItem 
              id={`Item${index}`} 
              todoText={todoText}/>
          </div>
        )
      })
    )
  }

  onDropHandler = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
  }

  onDragOverHandler = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }

  render () {
    const {todoList} = this.props;
    return (
      <div className="mainTodoList" onDrop={this.onDropHandler} onDragOver={this.onDragOverHandler}>
        {this.renderTodoList(todoList)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todoList : state.todoListDispatcher.todoList
  }
}

export default connect(mapStateToProps, null)(TodoList);