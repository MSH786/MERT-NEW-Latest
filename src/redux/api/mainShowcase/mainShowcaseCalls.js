import axios from 'axios';
import {showcaseItemsEP} from './mainShowcaseEndpoints';

export const fetchShowcaseItems = async () => {
  try {
    const response = await axios.get(showcaseItemsEP);

    const responseData = await response.data;

    if (response.status === 503) {
      return new Error('No internet connection, please try again!');
    }

    return responseData;
  } catch (error) {
    throw new Error(error.message);
  }
};
