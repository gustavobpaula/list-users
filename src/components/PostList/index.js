import React from 'react';
import { useSelector } from 'react-redux';
import PostItem from '../PostItem';
import Loading from '../Loading';
import NotFound from '../NotFound';

export default function Posts() {
  const posts = useSelector((state) => state.posts);
  const user = useSelector((state) => state.user);

  return (
    <>
      { (posts.fetching || user.fetching) ? (
        <Loading />
      ) : posts.data && posts.data.map((post, index) => (
        <PostItem
          key={post.id}
          index={index}
          title={post.title}
          body={post.body}
          user={user}
        />
      )) }

      {((posts.data && posts.data.length === 0) || posts.error) && <NotFound />}

    </>
  );
}
