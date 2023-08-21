import { useState } from 'react';
import './styles/App.css';
import { PostList } from './components/PostList';
import { PostForm } from './components/PostForm';
import { MySelect } from './components/UI/select/MySelect';

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

  const removePost = (post: Post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <MySelect
        defaultValue='sorted by'
        options={[
          { value: 'title', name: 'by name' },
          { value: 'body', name: 'by description' },
        ]}
      />
      {posts.length !== 0
        ? <PostList posts={posts} remove={removePost} title='Title list' />
        : <h1>Posts is empty</h1>
      }
    </div>
  );
}
