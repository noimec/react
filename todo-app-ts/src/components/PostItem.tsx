import React from "react";
import { Post } from "../App";
import { MyButton } from "./UI/button/MyButton";

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  post: Post;
  number: number;
  remove: (value: Post) => void;
}

export const Postitem = ({ post, number, remove }: Props) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>{number}. {post.title}</strong>
        <div>
          {post.body}
        </div>
      </div>
      <div className="post__btn">
        <MyButton onClick={() => remove(post)}>Delete</MyButton>
      </div>
    </div>
  )
}