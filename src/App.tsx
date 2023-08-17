import React, {useState} from 'react';

export function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript1', body: 'Description1'},
    {id: 2, title: 'Javascript2', body: 'Description2'},
    {id: 3, title: 'Javascript3', body: 'Description3'},
  ])

  const [title, setTitle] = useState('asd');

  // const addnewPost = () => {
    
  // }

  return (
    <div className="App">
      <form>
        <MyInput //управляемый компонент
        value={title}
        onChange={e => setTitle(e.target.value)}
        type="text" 
        placeholder="Название поста"
        />
        <MyInput type="text" placeholder="Описание поста"/>
        <MyButton disabled>Создать пост</MyButton>
      </form>
     <PostList posts={posts} title='Список постов 1'/>
    </div>
  );
}
