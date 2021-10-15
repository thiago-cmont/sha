export const Types = {
  SET_SIGNED: 'SET_SIGNED',
};

const INITIAL_STATE = {
  signed: false,
};

export default function reducer(state = INITIAL_STATE, {type, payload}) {
  switch (type) {
    case Types.SET_SIGNED:
      return {
        signed: payload.isSigned,
      };
    default:
      return state;
  }
}

export const setSigned = isSigned => ({
  type: Types.SET_SIGNED,
  payload: {isSigned},
});
