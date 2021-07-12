import AsyncStorage from '@react-native-community/async-storage';

export const LOGIN_REQUESTED = 'LOGIN_REQUESTED';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const CLEAN_AUTH_ERROR = 'CLEAN_AUTH_ERROR';

export const REGISTER_REQUESTED = 'REGISTER_REQUESTED';
export const REGISTER_FAILED = 'REGISTER_FAILED';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export const login = payload => {
  AsyncStorage.getItem('persist:alicibulapp_auth').then(data => {
    console.log(data, 'actions');
  });
  return {
    type: LOGIN_REQUESTED,
    payload,
  };
};

export const register = userInfos => {
  return {
    type: REGISTER_REQUESTED,
    userInfos,
  };
};

export const cleanAuthError = () => {
  return {
    type: CLEAN_AUTH_ERROR,
  };
};
