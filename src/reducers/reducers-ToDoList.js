import {
  ADD_TODO
} from '../actions/types';

const INITIAL_STATE = {
  todoList: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {...state, todoList: [...state.todoList, action.payload]}
    }
  }
  return state;
}