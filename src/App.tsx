import React, { useState } from 'react';
import './styles/App.css';
import { PostList } from './components/PostList';
import { PostForm } from './components/PostForm';

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

  const createPost = (newPost: Post) => {
    setPosts([...posts, newPost])
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList posts={posts} title='Title list' />
    </div>
  );
}
