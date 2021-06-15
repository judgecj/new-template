import * as TYPES from '../types';

const INITIAL_STATE = {
  isLoading: false,
  errorMessage: "",
  todos: []
};

export function todoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TYPES.FETCH_TODOS_START:
    case TYPES.ADD_TODOS_START:
      return {
        ...state,
        errorMessage: "",
        isLoading: true
      }
    case TYPES.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload
      }
    case TYPES.ADD_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: [...state.todos, action.payload]
      }
    case TYPES.FETCH_TODOS_FAILURE:
    case TYPES.ADD_TODOS_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      }
    default:
      return state
  }
}

export default todoReducer;
