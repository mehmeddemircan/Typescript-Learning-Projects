export interface TodoObject {
    message : string,
    id : number
}

export interface TodoList {
    todos : TodoObject[],
    deleteTodo : (id : number) => void
}

export interface IProps {
    todo : string,
    setTodo : React.Dispatch<React.SetStateAction<string>>
    addTodo : () => void
}