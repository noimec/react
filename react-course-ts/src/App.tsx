import { useEffect, useState } from 'react';
import { Card, CardVariant } from './components/Card';
import { IUser } from './types/types';
import axios from 'axios';
import { ITodo, List } from './components/List';
import { UserItem } from './components/UserItem';
import { TodoItem } from './components/TodoItem';

export function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchUsers()
    fetchTodos()
  }, [])

  const fetchUsers = async () => {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (error) {
      alert(error);
    }
  }

  const fetchTodos = async () => {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
      setTodos(response.data);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <Card
        variant={CardVariant.primary}
        height='200px'
        width='200px'
      >
        <button>Кнопка</button>
      </Card>
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
      />
      <List
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
      />
    </div >
  );
}
