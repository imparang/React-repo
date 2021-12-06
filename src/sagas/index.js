import { all, fork } from 'redux-saga/effects'
import boardSaga from './board'

export default function* rootSaga() {
  yield all([fork(boardSaga)])
}
