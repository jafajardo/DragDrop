import { combineReducers } from 'redux';
import todoListDispatcher from './reducers-ToDoList';

export default combineReducers({
  todoListDispatcher: todoListDispatcher
});