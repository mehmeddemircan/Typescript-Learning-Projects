import { GET_ALL_TODO_FAIL, GET_ALL_TODO_REQUEST, GET_ALL_TODO_SUCCESS } from "../constants/TodoConstants";

export interface GetAllTodoRequestAction {
    type: typeof GET_ALL_TODO_REQUEST;
  }
  
  export interface GetAllTodoSuccessAction {
    type: typeof GET_ALL_TODO_SUCCESS;
    payload: any; // Define the actual type of the payload data
  }
  
 export interface GetAllTodoFailAction {
    type: typeof GET_ALL_TODO_FAIL;
    error: any; // Define the actual type of the error object
  }