const INITIAL_STATE = {
  user: {
    fetching: false,
    fetched: false,
    error: null,
    data: null,
  },
  users: {
    fetching: false,
    fetched: false,
    error: null,
    data: null,
  },
  posts: {
    fetching: false,
    fetched: false,
    error: null,
    data: null,
  },
};

export default function users(state = INITIAL_STATE, action) {
  const caseTarget = action.meta && action.meta.toUpperCase();

  switch (action.type) {
    case `FETCH_${caseTarget}_PENDING`:
      return { ...state, [action.meta]: { ...state[action.meta], fetching: true } };
    case `FETCH_${caseTarget}_REJECTED`:
      return {
        ...state,
        [action.meta]: {
          ...state[action.meta],
          fetching: false,
          error: action.payload,
        },
      };
    case `FETCH_${caseTarget}_FULFILLED`:
      return {
        ...state,
        [action.meta]: {
          ...state[action.meta],
          fetching: false,
          fetched: true,
          error: null,
          data: action.payload,
        },
      };
    default:
      return state;
  }
}
