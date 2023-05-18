import React from 'react'


interface IProps {
    todo : string,
    setTodo : React.Dispatch<React.SetStateAction<string>>
    addTodo : () => void
}

const Todoinput:React.FC<IProps> = ({todo,setTodo, addTodo}) => {
  return (
    
    <div>
        <input value={todo} onChange={(e) => setTodo(e.target.value)} type='text' placeholder='yazınız' />
        <button  onClick={addTodo}>Ekle</button>
    </div>
  )
}

export default Todoinput