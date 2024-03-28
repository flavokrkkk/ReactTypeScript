import axios from "axios";
import { FC, useEffect, useState } from "react";
import { ITodo } from "../types/types";
import List from "./List";
import TodoItem from "./TodoItem";
import EventExample from "./EventExample";

const TodosPage: FC = () => {

  const [todos, setTodos] = useState<ITodo[]>([])

  const fetchTodos = async () => {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      setTodos(response.data)
    } catch (e) {
      alert(e)
    }
  }

  useEffect(() => {
    fetchTodos()
  }, [])

    return (
    <>
        <h1 style={{marginTop: 30}}>Posts</h1>
        <EventExample/>
        <hr/>
        <List
            items={todos}
            renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}
        />
    </>
    );
};

export default TodosPage;