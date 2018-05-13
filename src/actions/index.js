import {
  ADD_TODO
} from '../actions/types';

export function addTodo(todoItem) {
  return dispatch => {
    dispatch({
      type: ADD_TODO,
      payload: todoItem
    })
  }
}