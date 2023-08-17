import React, { useState } from "react";
import '../src/styles/App.css'
import { PostList } from "./components/PostList";
import { MyButton } from "./components/UI/button/MyButton";
import { MyInput } from "./components/UI/input/MyInput";

export function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript1', body: 'Description1'},
    {id: 2, title: 'Javascript2', body: 'Description2'},
    {id: 3, title: 'Javascript3', body: 'Description3'},
  ])

  return (
    <div className="App">
      <form>
        <MyInput type="text" placeholder="Название поста"/>
        <MyInput type="text" placeholder="Описание поста"/>
        <MyButton disabled>Создать пост</MyButton>
      </form>
     <PostList posts={posts} title='Список постов 1'/>
    </div>
  );
}
