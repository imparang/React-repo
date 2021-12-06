import axios from 'axios'
import { getApiAxios } from '../api/jsonApi'
import { all, fork, put, takeLatest, call, delay } from 'redux-saga/effects'
import {
  GET_BOARDLIST_REQUEST,
  GET_BOARDLIST_SUCCESS,
  GET_BOARDLIST_FAILURE,
  INSERT_BOARD_REQUEST,
  INSERT_BOARD_SUCCESS,
  INSERT_BOARD_FAILURE,
  UPDATE_BOARD_REQUEST,
  UPDATE_BOARD_SUCCESS,
  UPDATE_BOARD_FAILURE,
  DELETE_BOARD_REQUEST,
  DELETE_BOARD_SUCCESS,
  DELETE_BOARD_FAILURE,
} from '../redux/types'

// 보드 리스트 불러오기
function getBoardListApi(data) {
  return getApiAxios('list', data)
}

function* getBoardList(action) {
  try {
    const result = yield call(getBoardListApi, { searchData: action.data })
    yield put({
      type: GET_BOARDLIST_SUCCESS,
      data: result,
    })
  } catch (error) {
    yield put({
      type: GET_BOARDLIST_FAILURE,
      data: error,
    })
  }
}

// 보드 추가하기
function insertBoardApi(data) {
  return getApiAxios('insert', data)
}

function* insertBoard(action) {
  try {
    const result = yield call(insertBoardApi, action.data)
    yield put({
      type: INSERT_BOARD_SUCCESS,
      data: result,
    })
  } catch (error) {
    yield put({
      type: INSERT_BOARD_FAILURE,
      data: error,
    })
  }
}

// 보드 수정하기
function updateBoardApi(data) {
  return getApiAxios('update', data)
}

function* updateBoard(action) {
  try {
    const result = yield call(updateBoardApi, action.data)
    yield put({
      type: UPDATE_BOARD_SUCCESS,
      data: result,
    })
  } catch (error) {
    yield put({
      type: UPDATE_BOARD_FAILURE,
      data: error,
    })
  }
}

// 보드 삭제하기
function deleteBoardApi(id) {
  return getApiAxios('delete', { id })
}

function* deleteBoard(action) {
  try {
    const result = yield call(deleteBoardApi, action.id)
    yield put({
      type: DELETE_BOARD_SUCCESS,
      data: result,
    })
  } catch (error) {
    yield put({
      type: DELETE_BOARD_FAILURE,
      data: error,
    })
  }
}

function* watchGetBoardList() {
  yield takeLatest(GET_BOARDLIST_REQUEST, getBoardList)
}

function* watchInserBoard() {
  yield takeLatest(INSERT_BOARD_REQUEST, insertBoard)
}

function* watchUpdateBoard() {
  yield takeLatest(UPDATE_BOARD_REQUEST, updateBoard)
}

function* watchDeleteBoard() {
  yield takeLatest(DELETE_BOARD_REQUEST, deleteBoard)
}

export default function* boardSaga() {
  yield all([
    fork(watchGetBoardList),
    fork(watchInserBoard),
    fork(watchUpdateBoard),
    fork(watchDeleteBoard),
  ])
}
