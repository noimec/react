import { useMemo, useState } from 'react';
import './styles/App.css';
import { PostList } from './components/PostList';
import { PostForm } from './components/PostForm';
import { PostFilter } from './components/PostFilter';
import { MyModal } from './components/UI/modal/MyModal';
import { MyButton } from './components/UI/button/MyButton';

export interface Post {
  id: number;
  title: string;
  body: string;
}

export function App() {
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, title: 'z', body: 'a' },
    { id: 2, title: 'x', body: 'b' },
    { id: 3, title: 'c', body: 'c' },
  ])

  const [filter, setFilter] = useState({ sort: '', query: '' });

  const [modal, setModal] = useState(false);

  const sortedPosts = useMemo(() => {
    console.log('working');

    filter.sort && [...posts].sort((a: any, b: any) => a[filter.sort].localeCompare(b[filter.sort]));

    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])

  const createPost = (newPost: Post) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post: Post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  return (
    <div className="App">
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Create post
      </MyButton>
      <hr style={{ margin: '15px 0' }} />
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList posts={sortedAndSearchedPosts} remove={removePost} title='Title list' />
    </div>
  )
}
