import * as TYPES from '../types';

import TASKS from '../../utils/tasks.json';

// export const setStrategy = (strategy) => {
//   return {
//     type: TYPES.SET_STRATEGY,
//     payload: strategy,
//   }
// }

export const getAllTodos = () => dispatch => {

  dispatch({
    type: TYPES.FETCH_TODOS_START,
  });


  try {
    if (TASKS.length !== 0) {
      dispatch({
        type: TYPES.FETCH_TODOS_SUCCESS,
        payload: TASKS
      });
    }
  } catch (e) {
    dispatch({
      type: TYPES.FETCH_TODOS_FAILURE,
      payload: e
    });
  }
}

export const addTodo = (todoForm) => dispatch => {
  dispatch({
    type: TYPES.ADD_TODOS_START,
  });


  try {
    if (TASKS.length !== 0) {
      dispatch({
        type: TYPES.ADD_TODOS_SUCCESS,
        payload: todoForm
      });
    }
  } catch (e) {
    dispatch({
      type: TYPES.ADD_TODOS_FAILURE,
      payload: e
    });
  }
}
