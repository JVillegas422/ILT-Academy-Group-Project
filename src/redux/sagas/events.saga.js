import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';



function* eventsSaga() {
  yield takeLatest('FETCH_USER', fetchUser);
}

export default eventsSaga;