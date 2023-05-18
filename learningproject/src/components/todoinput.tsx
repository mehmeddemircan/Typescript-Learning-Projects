import React from 'react'


interface IProps {
    todo : string,
    setTodo : React.Dispatch<React.SetStateAction<string>>
    addTodo : () => void
}

const Todoinput:React.FC<IProps> = ({todo,setTodo, addTodo}) => {
  return (
    
    <div>
      <h4 className='text-center'>Todo Project</h4>
        <input  className='form-control w-50 d-inline-block my-3'  value={todo} onChange={(e) => setTodo(e.target.value)} type='text' placeholder='yazınız' />
        <button className='btn rounded-pill btn-dark mx-2'  onClick={addTodo}>Ekle</button>
    </div>
  )
}

export default Todoinput