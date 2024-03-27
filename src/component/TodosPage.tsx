import { FC, useEffect, useState } from "react";
import { ITodo } from "../types/types";
import axios from "axios";
import List from "./List";
import TodoItem from "./TodoItem";

const TodosPage: FC = () => {
    
  const [todo, setTodo] = useState <ITodo[]> ([])

  useEffect(() => {
    fetchTodo()
    console.log(todo);
  }, [])


  //Принимаем todo с сервера
  async function fetchTodo() {
    try {
       const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
       setTodo(response.data)
    } catch (e) {
      console.log(e);
    }
  }
 
    return (
        <div>
            <h1>Todos</h1>
            <List
                items={todo}
                renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}
            />
        </div>
    );
};

export default TodosPage;