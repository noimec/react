import React from "react";
import { MyButton } from "./UI/button/MyButton";
import { Post } from "../pages/Posts";
import { useNavigate } from "react-router-dom";

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  post: Post;
  remove: (value: Post) => void;
}

export const Postitem = ({ post, remove }: Props) => {
  const router = useNavigate();
  return (
    <div className="post">
      <div className="post__content">
        <strong>{post.id}. {post.title}</strong>
        <div>
          {post.body}
        </div>
      </div>
      <div className="post__btn">
        <MyButton onClick={() => router(`/posts/${post.id}`)}>Open</MyButton>
        <MyButton onClick={() => remove(post)}>Delete</MyButton>
      </div>
    </div>
  )
}