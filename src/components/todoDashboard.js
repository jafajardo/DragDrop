import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/index';

import AddTodoBar from './addTodoBar';
import TodoList from './todoList';

class TodoDashboard extends Component {
  render () {
    return(
      <div>
        <AddTodoBar />
        <TodoList />
      </div>
    )
  }
}

export default TodoDashboard;