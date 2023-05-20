import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import todoReducer, { GET_ALL_TODO_INITIAL_STATE } from './reducers/TodoReducers';


// Combine multiple reducers
const rootReducer = combineReducers({
    todo : todoReducer
});


  
  // Define the initial state
const initialState = {
    
}

// Create the Redux store
const store = createStore(rootReducer,initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;