import React from 'react';
import { useSelector } from 'react-redux';
import PostItem from '../PostItem';

export default function Posts() {
  const posts = useSelector((state) => state.posts);
  const user = useSelector((state) => state.user);

  return (
    <>
      {posts.map((post, index) => (
        <PostItem key={post.id} index={index} title={post.title} body={post.body} user={user} />
      ))}
    </>
  );
}
