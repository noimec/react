import React from "react";
import { Postitem } from "./PostItem";
import { Post } from "../App";

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  posts: Post[];
  title: string;
  remove: (value: Post) => void;
}

export const PostList = ({ posts, title, remove }: Props) => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map((post, index) =>
        <Postitem remove={remove} number={index + 1} post={post} key={post.id} />
      )}
    </div>
  )
}