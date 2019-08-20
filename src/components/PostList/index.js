import React from 'react';
import { useSelector } from 'react-redux';
import PostItem from '../PostItem';
import Loading from '../Loading';

export default function Posts() {
  const posts = useSelector((state) => state.posts);
  const user = useSelector((state) => state.user);

  return (
    <>
      { (posts.fetching || user.fetching) ? (
        <Loading />
      ) : posts.fetched && user.fetched && posts.data.map((post, index) => (
        <PostItem
          key={post.id}
          index={index}
          title={post.title}
          body={post.body}
          user={user}
        />
      ))}
    </>
  );
}
