import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Todoinput from './components/todoinput';
import { TodoObject } from './types/TodoType';


const App : React.FC = () =>  {

  const [todo, setTodo] = useState<string>("")

  const [todos, setTodos] = useState<TodoObject[]>([])

  const addTodo = () => {
    if (todo) {
      setTodos([...todos,{message : todo, id : todos.length + 1}])
    }
    setTodo("")
  }

  return (
    <div className="App">
      <Todoinput addTodo={addTodo}  todo={todo} setTodo={setTodo} />
      {todos.map((item) => (
        <h4>{item.message} - {item.id}</h4>
      ))}
    </div>
  );
}

export default App;
