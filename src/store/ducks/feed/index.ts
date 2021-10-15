export const Types = {
  GET_FEED: 'GET_FEED',
  ASYNC_GET_FEED: 'ASYNC_GET_FEED',
};

const INITIAL_STATE = {
  feed: [],
};

export default function reducer(state = INITIAL_STATE, {type, payload}) {
  switch (type) {
    case Types.GET_FEED:
      return {
        feed: payload.feed,
      };
    default:
      return state;
  }
}

export const getFeed = feed => ({
  type: Types.GET_FEED,
  payload: {feed},
});

export const asyncGetFeed = () => ({
  type: Types.ASYNC_GET_FEED,
});
