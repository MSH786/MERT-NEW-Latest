import axios from 'axios';
import {API_HEADERS, API_HEADERS_BEARER_TOKEN, API_URL} from '../contants';
import {createToken, refreshToken, loginWithEmail} from '../auth/authRequest';
import * as P from '../endpoints';
import {isError, isSuccess, isUnauthorized, tokenControl} from '../helpers';

export const callCreateToken = params => {
  return new Promise((resolve, reject) => {
    axios
      .post(API_URL + P.CREATE_TOKEN_ENDPOINT, createToken(params), {
        headers: API_HEADERS,
      })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const callRefreshToken = params => {
  return new Promise((resolve, reject) => {
    axios
      .post(API_URL + P.REFRESH_TOKEN_ENDPOINT, refreshToken(params), {
        headers: API_HEADERS,
      })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const callLoginWithEmail = (params, callFunction) => {
  return dispatch =>
    new Promise((resolve, reject) => {
      axios
        .post(API_URL + P.LOGIN_WITH_EMAIL_ENDPOINT, loginWithEmail(params), {
          headers: API_HEADERS_BEARER_TOKEN(params.token),
        })
        .then(response => {
          if (isUnauthorized(response)) {
            dispatch(tokenControl(callFunction, params))
              .then()
              .catch(error => {
                reject(error);
              });
          } else if (isSuccess(response)) resolve(response);
          else if (isError(response)) reject();
        })
        .catch(error => {
          reject(error);
        });
    });
};
