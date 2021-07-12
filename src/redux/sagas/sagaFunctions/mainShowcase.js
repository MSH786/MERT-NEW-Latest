import {put, call} from 'redux-saga/effects';
import {
  FETCH_SHOWCASE_ITEMS_ERROR,
  FETCH_SHOWCASE_ITEMS_SUCCESS,
} from '../../actions/mainShowcase';
import {fetchShowcaseItems} from '../../api/mainShowcase/mainShowcaseCalls';

export function* loadShowcaseItems({}) {
  try {
    const responseData = yield call(fetchShowcaseItems);
    yield put({
      type: FETCH_SHOWCASE_ITEMS_SUCCESS,
      mainShowcaseItems: responseData,
    });
  } catch (e) {
    yield put({type: FETCH_SHOWCASE_ITEMS_ERROR, errorMessage: e.message});
  }
}
