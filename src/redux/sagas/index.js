import {fork, all} from 'redux-saga/effects';
import AuthSagas from './sagaWatchers/auth';
import mainShowcaseSagas from './sagaWatchers/mainShowcase';

const {loginSaga, registerSaga} = AuthSagas();
const {fetchShowcaseItems} = mainShowcaseSagas();

export default function* rootSaga() {
  yield all([fork(loginSaga), fork(registerSaga), fork(fetchShowcaseItems)]);
}
