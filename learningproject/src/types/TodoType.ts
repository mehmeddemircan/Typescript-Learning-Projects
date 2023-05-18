export interface TodoObject {
    message : string,
    id : number
}

export interface TodoList {
    todos : TodoObject[],
    deleteTodo : (id : number) => void
}