/**
  * Get Users from jsonplaceholder API
  *
  */
export function fetchUsers(dispatch) {
  dispatch({
    type: 'FETCH_USERS',
    meta: 'users',
    payload: fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()),
  });
}

/**
  * Clean posts in store
  *
  */
export function cleanStorePosts(dispatch) {
  dispatch({
    type: 'FETCH_POSTS_FULFILLED',
    meta: 'posts',
    payload: null,
  });
}

/**
  * Get Posts from jsonplaceholder API
  *
  */
export function getPosts(userId, dispatch) {
  dispatch({
    type: 'FETCH_POSTS',
    meta: 'posts',
    payload: fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then((res) => res.json()),
  });
}

/**
   * Get User from jsonplaceholder API
   *
   */
export function getUser(userId, dispatch) {
  dispatch({
    type: 'FETCH_USER',
    meta: 'user',
    payload: fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then((res) => res.json()),
  });
}
