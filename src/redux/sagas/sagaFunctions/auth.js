import {put, takeEvery, call, takeLatest, take, race} from 'redux-saga/effects';
import {
  LOGIN_REQUESTED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  REGISTER_REQUESTED,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
} from '../../actions/auth';
import {login, register} from '../../api/auth/authCalls';

export function* loginUser({payload}) {
  try {
    //const responseData = yield call(login, payload);
    yield put({type: LOGIN_SUCCESS, user: {name: 'berke'}});
  } catch (e) {
    yield put({type: LOGIN_FAILED, message: e.message});
  }
}

export function* registerUser({payload}) {
  try {
    const responseData = yield call(register, payload);

    //yield put({type: REGISTER_SUCCESS, responseData});
  } catch (e) {
    yield put({type: REGISTER_FAILED, message: e.message});
  }
}
