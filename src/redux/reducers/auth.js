import {
  LOGIN_REQUESTED,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  REGISTER_REQUESTED,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  CLEAN_AUTH_ERROR,
} from '../actions/auth';

const initialState = {
  userCredentials: {},
  authLoading: false,
  authError: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUESTED:
      return {
        ...state,
        authLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        authLoading: false,
        userCredentials: action.user,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        authLoading: false,
        authError: action.message,
      };
    case REGISTER_REQUESTED:
      return {
        ...state,
        authLoading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        authLoading: false,
        userCredentials: action.userInfos,
      };
    case REGISTER_FAILED:
      return {
        ...state,
        authLoading: false,
        authError: action.message,
      };
    case CLEAN_AUTH_ERROR:
      return {
        ...state,
        authError: null,
      };
    default:
      return state;
  }
};
