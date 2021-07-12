import axios from 'axios';
import {loginEP, registerEP} from './authEndpoints';

//Here is where we make api calls.

export const login = async payload => {
  try {
    const response = await axios({
      method: 'POST',
      url: loginEP,
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        payload,
      },
    });

    const responseData = await response.data;

    return responseData;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const register = async () => {
  try {
    const response = await axios({
      method: 'POST',
      url: registerEP,
      headers: {
        'Content-Type': 'application/json',
      },
      data: payload,
    });
    const responseData = await response.data;
    return responseData;
  } catch (e) {
    throw new Error(e.message);
  }
};
