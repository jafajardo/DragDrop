import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/index';

class AddTodoBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItem: ''
    }
  }

  onTodoEntryChange = (event) => {
    event.preventDefault();
    this.setState({ todoItem: event.target.value });
  }

  onClickHandler = (event) => {
    event.preventDefault();
    const {addTodo} = this.props;
    addTodo(this.state.todoItem);
    this.setState({ todoItem: '' });
  }

  render () {
    return(
      <div className="todoBar">
        <form className="input-group">
          <input className="form-control" placeholder="To do entry" onChange={this.onTodoEntryChange} />
          <button className="btn btn-primary" type="submit" onClick={this.onClickHandler}>Add Todo</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todoList : state.todoListDispatcher.todoList
  }
}

export default connect(mapStateToProps, actions)(AddTodoBar);