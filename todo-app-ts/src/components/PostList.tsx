import React from "react";
import { Postitem } from "./PostItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Post } from "../pages/Posts";

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  posts: Post[];
  title: string;
  remove: (value: Post) => void;
}

export const PostList = ({ posts, title, remove }: Props) => {

  if (!posts.length) {
    return (
      <h1>Posts is empty</h1>
    )
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post) =>
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <Postitem remove={remove} post={post} />
          </CSSTransition >
        )}
      </TransitionGroup>
    </div>
  )
}