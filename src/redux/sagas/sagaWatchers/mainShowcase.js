import {takeLatest} from 'redux-saga/effects';
import {FETCH_SHOWCASE_ITEMS_REQUESTED} from '../../actions/mainShowcase';
import {loadShowcaseItems} from '../sagaFunctions/mainShowcase';

function* fetchShowcaseItems() {
  yield takeLatest(FETCH_SHOWCASE_ITEMS_REQUESTED, loadShowcaseItems);
}

export default () => {
  return {
    fetchShowcaseItems,
  };
};
