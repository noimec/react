import { Card, CardVariant } from './components/Card';
import { EventsExample } from './components/EventsExample';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { UserPage } from './components/UserPage';
import { TodosPage } from './components/TodosPage';
import { UserItemPage } from './components/UserItemPage';
import { TodoItemPage } from './components/TodoItemPage';

export function App() {
  return (

    <BrowserRouter>
      <Link to='/users' style={{ display: 'block' }} >Пользователи</Link>
      <Link to='todos' >Список дел</Link>
      <div>
        <EventsExample />
        <Card
          variant={CardVariant.primary}
          height='200px'
          width='200px'
        >
          <button>Кнопка</button>
        </Card>
      </div >
      <Routes>
        <Route path={'/users'} element={<UserPage />} />
        <Route path={'/todos'} element={<TodosPage />} />
        <Route path={'/users/:id'} element={<UserItemPage />} />
        <Route path={'/todos/:id'} element={<TodoItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}
