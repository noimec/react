import React from "react";
import { Postitem } from "./PostItem";
import { Post } from "../App";

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  posts: Post[]
  title: string
}

export const PostList = ({ posts, title }: Props) => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map(post =>
        <Postitem post={post} key={post.id} />
      )}
    </div>
  )
}