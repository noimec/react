import React from "react";
import { Postitem } from "./PostItem";
import { Post } from "../App";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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
        {posts.map((post, index) =>
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <Postitem remove={remove} number={index + 1} post={post} />
          </CSSTransition >
        )}
      </TransitionGroup>
    </div>
  )
}