import { TodoObject } from "../../types/TodoType"
import { GetAllTodoAction } from "../actions/TodoActions"
import { GET_ALL_TODO_FAIL, GET_ALL_TODO_REQUEST, GET_ALL_TODO_SUCCESS } from "../constants/TodoConstants"
import {combineReducers}  from 'redux'

export  interface GetAllTodoInitialState {
    loading : boolean;
    success : boolean ;
    todos : any;  
    error? : any 
}

export  const GET_ALL_TODO_INITIAL_STATE : GetAllTodoInitialState = {
    loading : false, 
    success : false,  
    todos :  null
}


export const getAllTodoReducer = (state  = GET_ALL_TODO_INITIAL_STATE , action : any )  => {
    switch (action.type) {
        case GET_ALL_TODO_REQUEST:
            return {...state,loading : true }
            
        case GET_ALL_TODO_SUCCESS : 
            return {...state, loading : false , success : true , todos : action.payload}
        case GET_ALL_TODO_FAIL : 
            return {...state , loading : false , success : false,error : action.error}
        default:
            break;
    }
}

const todoReducer = combineReducers({
    getAllTodo : getAllTodoReducer
})

export default todoReducer