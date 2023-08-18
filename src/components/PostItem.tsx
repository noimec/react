import React from "react";
import { Post } from "../App";

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  post: Post
}

export const Postitem = ({ post }: Props) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>{post.id}. {post.title}</strong>
        <div>
          {post.body}
        </div>
      </div>
      <div className="post__btn">
        <button>Delete</button>
      </div>
    </div>
  )
}