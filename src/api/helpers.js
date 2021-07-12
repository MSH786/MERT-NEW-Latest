import {callRefreshToken} from './auth/authServices';
import allActions from '../redux/action';

export const isSuccess = response => {
  return response.data.status === 100;
};

export const isError = response => {
  return response.data.status === 101;
};

export const isUnauthorized = response => {
  return response.data.status === 201;
};

export const isAnotherDeviceLogin = response => {
  return response.data.status === 202;
};

export const getErrorMessage = response => {
  return response.data.message;
};

const newParams = (params, response) => {
  const newParams = {
    ...params,
    customerId: response.data.data.customerId,
    refreshToken: response.data.data.refreshToken,

    token: response.data.data.token,
  };

  return newParams;
};

export const tokenControl = (callFunction, params) => {
  debugger;
  return dispatch =>
    new Promise((resolve, reject) => {
      callRefreshToken(params)
        .then(response => {
          if (isSuccess(response)) {
            debugger;
            dispatch(allActions.authAction(response.data.data));
            callFunction(newParams(params, response));
          }
        })
        .catch(error => {
          debugger;
          reject(error);
        });
    });
};
