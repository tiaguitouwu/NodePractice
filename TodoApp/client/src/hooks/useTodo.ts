import { useEffect, useState } from "react";
import { Todo } from "../assets/types/todo";
import { deleteTodobyID, fetchTodo, newTodo, setCompleted } from "../assets/todos";

export default function useTodos(){

    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        fetchTodo().then((data) => setTodos(data));
    }, []);
    
    function setComplete(id:number, completado:boolean) {
        setCompleted(id,completado).then((data) => setTodos(data))
    }
    
    function addTodo(title:string){
        newTodo(title).then((data) => setTodos(data))
    }
    
    function deleteTodo(id:number){
        //setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
        deleteTodobyID(id).then((data) => setTodos(data))
    }

    function deleteAllCompleted(){
        setTodos(prevTodos => prevTodos.filter(todo => !todo.completado))
    }

    return{
        todos,
        addTodo,
        setComplete,
        deleteTodo,
        deleteAllCompleted
    }

}