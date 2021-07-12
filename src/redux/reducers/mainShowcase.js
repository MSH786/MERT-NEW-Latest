import {
  FETCH_SHOWCASE_ITEMS_ERROR,
  FETCH_SHOWCASE_ITEMS_REQUESTED,
  FETCH_SHOWCASE_ITEMS_SUCCESS,
  CLEAN_FETCH_ERROR,
} from '../actions/mainShowcase';

const initialState = {
  showcaseItems: [],
  fetchError: null,
  fetchLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SHOWCASE_ITEMS_REQUESTED:
      return {
        ...state,
        fetchLoading: true,
      };
    case FETCH_SHOWCASE_ITEMS_SUCCESS:
      return Object.assign({}, state, {
        showcaseItems: action.mainShowcaseItems,
        fetchLoading: false,
      });
    case FETCH_SHOWCASE_ITEMS_ERROR:
      return Object.assign({}, state, {
        fetchError: action.errorMessage,
        fetchLoading: false,
      });
    case CLEAN_FETCH_ERROR:
      return Object.assign({}, state, {
        fetchError: false,
      });
    default:
      return state;
  }
};
