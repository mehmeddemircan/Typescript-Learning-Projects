
import { GET_ALL_TODO_FAIL, GET_ALL_TODO_REQUEST, GET_ALL_TODO_SUCCESS } from "../constants/TodoConstants";
import { GetAllTodoFailAction, GetAllTodoRequestAction, GetAllTodoSuccessAction } from "../interfaces/TodoInterfaces";
import { Dispatch } from "redux";
import axios from 'axios'

  
 export type GetAllTodoAction =
    | GetAllTodoRequestAction
    | GetAllTodoSuccessAction
    | GetAllTodoFailAction;


export const GetAllTodo = () => async (dispatch :  Dispatch<GetAllTodoAction>): Promise<void> => {
    try {
        
        dispatch({
            type : GET_ALL_TODO_REQUEST 
        })

        const {data} = await axios.get('http://localhost:5000/api/tasks')
        dispatch({
            type : GET_ALL_TODO_SUCCESS,
            payload : data
        })
    } catch (error : any) {
        dispatch({
            type : GET_ALL_TODO_FAIL,
            error : error.response?.data 
        })
    }
} 