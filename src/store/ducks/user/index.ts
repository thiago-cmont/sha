export const Types = {
  GET_USER: 'GET_USER',
  ASYNC_GET_USER: 'ASYNC_GET_USER',
  LOGOUT_USER: 'LOGOUT_USER',
  ASYNC_LOGOUT_USER: 'ASYNC_LOGOUT_USER',
};

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  level: null,
  apartment: '',
  apartmentComplexName: '',
  apartmentComplexId: null,
};

export default function reducer(state = INITIAL_STATE, {type, payload}) {
  switch (type) {
    case Types.GET_USER:
      return {
        ...state,
        name: payload.user.name,
        email: payload.user.email,
        password: payload.user.password,
        level: payload.user.level,
        apartment: payload.user.apartment,
        apartmentComplexName: payload.user.apartmentComplexName,
        apartmentComplexId: payload.user.apartmentComplexId,
      };
    case Types.LOGOUT_USER:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export const getUser = user => ({
  type: Types.GET_USER,
  payload: {user},
});

export const asyncGetUser = (email, password) => ({
  type: Types.ASYNC_GET_USER,
  payload: {email, password},
});

export const logoutUser = () => ({
  type: Types.LOGOUT_USER,
});

export const asyncLogoutUser = () => ({
  type: Types.ASYNC_LOGOUT_USER,
});
