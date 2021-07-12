import {takeLatest} from 'redux-saga/effects';
import {loginUser, registerUser} from '../sagaFunctions/auth';
import {REGISTER_REQUESTED, LOGIN_REQUESTED} from '../../actions/auth';

function* registerSaga() {
  yield takeLatest(REGISTER_REQUESTED, registerUser);
}

function* loginSaga() {
  yield takeLatest(LOGIN_REQUESTED, loginUser);
}

export default () => {
  return {loginSaga, registerSaga};
};
