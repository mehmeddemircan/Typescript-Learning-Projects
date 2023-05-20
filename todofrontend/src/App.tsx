import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Todoinput from './components/todoinput';
import { TodoObject } from './types/TodoType';
import Todolist from './components/todolist';


const App : React.FC = () =>  {

  const [todo, setTodo] = useState<string>("")

  const [todos, setTodos] = useState<TodoObject[]>([])

  const addTodo = () => {
    if (todo) {
      setTodos([...todos,{message : todo, id : todos.length + 1}])
    }
    setTodo("")
  }
  
  const deleteTodo = (id : number) => {
    setTodos(todos.filter((item) => item.id != id))
  }

 

  return (
    <div className="App">
   
      <Todoinput addTodo={addTodo}  todo={todo} setTodo={setTodo} />
     <Todolist todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
