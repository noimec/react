import { FC, useEffect, useState } from "react"
import { ITodo, List } from "./List";
import axios from "axios";
import { TodoItem } from "./TodoItem";

export const TodosPage: FC = ()=>{
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
      fetchTodos()
    }, [])
  
    const fetchTodos = async () => {
      try {
        const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
        setTodos(response.data);
      } catch (error) {
        alert(error);
      }
    }

    return(
        <List
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
      />
    )
}