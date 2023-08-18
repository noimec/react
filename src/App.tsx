import React, { useState } from 'react';
import './styles/App.css';
import { MyButton } from './components/UI/button/MyButton';
import { PostList } from './components/PostList';
import { MyInput } from './components/UI/input/MyInput';

export interface Post {
  id: number;
  title: string;
  body: string;
}

export function App() {
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, title: 'Javascript1', body: 'Description1' },
    { id: 2, title: 'Javascript2', body: 'Description2' },
    { id: 3, title: 'Javascript3', body: 'Description3' },
  ])

  const [title, setTitle] = useState('title');

  const addNewPost = (e: React.SyntheticEvent): void => e.preventDefault();

  return (
    <div className="App">
      <form>
        <MyInput //управляемый компонент
          value={title}
          label='asdas'
          onChange={e => setTitle(e.target.value)}
          type="text"
          placeholder="Название поста"
        />
        <MyInput type="text" placeholder="Описание поста" />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title='Список постов 1' />
    </div>
  );
}
