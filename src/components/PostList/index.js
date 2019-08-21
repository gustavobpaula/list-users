import React from 'react';
import { useSelector } from 'react-redux';
import PostItem from '../PostItem';
import Loading from '../Loading';
import NotFound from '../NotFound';

export default function PostList() {
  const posts = useSelector((state) => state.posts);
  const user = useSelector((state) => state.user);

  /**
   * Render Not Found component if post are null or empty
   *
   * @returns
   */
  function renderNotFound() {
    return ((posts.data && posts.data.length === 0) || posts.error) && <NotFound />;
  }

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

      {renderNotFound()}

    </>
  );
}
