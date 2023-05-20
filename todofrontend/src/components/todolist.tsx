import React, { Fragment, useEffect } from 'react'
import { TodoList, TodoObject } from '../types/TodoType';
import {  List } from 'antd';
import {useDispatch , useSelector} from 'react-redux'
import { GetAllTodo } from '../redux/actions/TodoActions';

const Todolist: React.FC<TodoList> = ({todos,deleteTodo}) => {


  return (
    <Fragment>


  <List
    className='mx-auto col-md-6'
    itemLayout="horizontal"
>


    {todos.map((item) => (

        <Fragment>
              <List.Item actions={[
  <span style={{cursor : 'pointer'}} onClick={() => deleteTodo(item.id)}>x</span>
              ]
              
              }>
        <List.Item.Meta
        
          title={<a>{item.message}    </a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
      
   
        </Fragment>
      ))}
    </List>



      
    </Fragment>
  )
}

export default Todolist ;