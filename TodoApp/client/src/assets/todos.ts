import { Todo } from "./types/todo";

const URL_API= import.meta.env.VITE_URL_API;

console.log(URL_API)

export async function fetchTodo(): Promise<Todo[]> {
    const response = await fetch(URL_API+'/show', {
        method: "POST"
      });
    const data = await response.json();
    return data;
} 

export async function newTodo(title:string): Promise<Todo[]> {

    const maxId = await fetch(URL_API+'/show/getMaxId', {
        method: "POST"
      });
    const data = await maxId.json();

    console.log(data)

    const newTodo ={
        "id":data.length === 0 ? 1 : Number(data[0].id)+1,
        "title":title
    }

    await fetch(URL_API+'/new', {
        method: "POST",
        body:JSON.stringify(newTodo),
        headers: {
            "Content-type": "application/json"
        }
    });


    return fetchTodo()

}

export async function deleteTodobyID(id:number) {
    const todoId = {
        "id":id
    }
    await fetch(URL_API+'/delete', {
        method: 'DELETE',
        body:JSON.stringify(todoId),
        headers: {
            "Content-type": "application/json"
        }
    });

    return fetchTodo()
}

export async function setCompleted(id:number,completed:boolean) {
    const todoId = {
        "id":id,
        "completado":completed
    }
    await fetch(URL_API+'/setCompleted', {
        method: 'PUT',
        body:JSON.stringify(todoId),
        headers: {
            "Content-type": "application/json"
        }
    });

    return fetchTodo()
}