export const FETCH_SHOWCASE_ITEMS_REQUESTED = 'FETCH_SHOWCASE_ITEMS_REQUESTED';
export const FETCH_SHOWCASE_ITEMS_SUCCESS = 'FETCH_SHOWCASE_ITEMS_SUCCESS';
export const FETCH_SHOWCASE_ITEMS_ERROR = 'FETCH_SHOWCASE_ITEMS_ERROR';
export const CLEAN_FETCH_ERROR = 'CLEAN_FETCH_ERROR';

export const fetchShowcaseItems = () => {
  return {
    type: FETCH_SHOWCASE_ITEMS_REQUESTED,
  };
};

export const cleanFetchError = () => {
  return {
    type: CLEAN_FETCH_ERROR,
  };
};
