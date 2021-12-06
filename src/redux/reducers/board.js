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
} from '../types'

export const getBoardList = data => {
  return {
    type: GET_BOARDLIST_REQUEST,
    data,
  }
}

export const insertBoard = data => {
  return {
    type: INSERT_BOARD_REQUEST,
    data,
  }
}

export const updateBoard = data => {
  return {
    type: UPDATE_BOARD_REQUEST,
    data,
  }
}

export const deleteBoard = id => {
  return {
    type: DELETE_BOARD_REQUEST,
    id,
  }
}

const initial = {
  getBoardLoading: false,
  getBoardDone: false,
  getBoardError: null,
  insertBoardLoading: false,
  insertBoardDone: false,
  insertBoardError: null,
  updateBoardLoading: false,
  updateBoardDone: false,
  updateBoardError: null,
  deleteBoardLoading: false,
  deleteBoardDone: false,
  deleteBoardError: null,
  data: {
    id: '',
    title: '',
    content: '',
    insert_user: '',
    insert_date: '',
  },
}

const apiReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_BOARDLIST_REQUEST:
      return {
        ...state,
        getBoardLoading: true,
        getBoardDone: false,
        getBoardError: null,
      }
    case GET_BOARDLIST_SUCCESS:
      return {
        ...state,
        getBoardLoading: false,
        getBoardDone: true,
        data: action.data,
      }
    case GET_BOARDLIST_FAILURE:
      return {
        getBoardLoading: false,
        getBoardError: true,
        data: action.data,
      }
    case INSERT_BOARD_REQUEST:
      return {
        ...state,
        insertBoardLoading: true,
        insertBoardDone: false,
        insertBoardError: null,
      }
    case INSERT_BOARD_SUCCESS:
      return {
        ...state,
        insertBoardLoading: false,
        insertBoardDone: true,
        data: action.data,
      }
    case INSERT_BOARD_FAILURE:
      return {
        insertBoardLoading: false,
        insertBoardError: true,
        data: action.data,
      }
    case UPDATE_BOARD_REQUEST:
      return {
        ...state,
        updateBoardLoading: true,
        updateBoardDone: false,
        updateBoardError: null,
      }
    case UPDATE_BOARD_SUCCESS:
      return {
        ...state,
        updateBoardLoading: false,
        updateBoardDone: true,
        data: action.data,
      }
    case UPDATE_BOARD_FAILURE:
      return {
        updateBoardLoading: false,
        updateBoardError: true,
      }
    case DELETE_BOARD_REQUEST:
      return {
        ...state,
        deleteBoardLoading: true,
        deleteBoardDone: false,
        deleteBoardError: null,
      }
    case DELETE_BOARD_SUCCESS:
      return {
        ...state,
        deleteBoardLoading: false,
        deleteBoardDone: true,
        data: action.data,
      }
    case DELETE_BOARD_FAILURE:
      return {
        deleteBoardLoading: false,
        deleteBoardError: true,
        data: action.data,
      }
    default:
      return state
  }
}

export default apiReducer
