import { FC } from "react";
import { ITodo } from "./List";

interface TodoItemProps {
    todo: ITodo;
}

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
    return (
        <div>
            <input type="checkbox" checked={todo.completed} />
            {todo.id}. {todo.title}
        </div>
    )
}