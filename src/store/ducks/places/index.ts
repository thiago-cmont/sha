export const Types = {
  GET_PLACES: 'GET_PLACES',
  ASYNC_GET_PLACES: 'ASYNC_GET_PLACES',
};

const INITIAL_STATE = {
  places: [],
};

export default function reducer(state = INITIAL_STATE, {type, payload}) {
  switch (type) {
    case Types.GET_PLACES:
      return {
        places: payload.places,
      };
    default:
      return state;
  }
}

export const getPlaces = places => ({
  type: Types.GET_PLACES,
  payload: {places},
});

export const asyncGetPlaces = () => ({
  type: Types.ASYNC_GET_PLACES,
});
