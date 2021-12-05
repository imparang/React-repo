import { getApiAxios } from '../../api/jsonApi'

const GET_REQUEST = 'GET_REQUEST'
const GET_BOARDLIST = 'GET_BOARDLIST'
const INSERT_BOARD = 'INSERT_BOARD'
const UPDATE_BOARD = 'UPDATE_BOARD'
const DELETE_BOARD = 'DELETE_BOARD'
const GET_FAILED = 'GET_FAILED'

function getApi(type, data) {
  return getApiAxios(type, data)
}

export const getBoardList = searchData => async dispatch => {
  dispatch({ type: GET_REQUEST })
  try {
    const response = await getApi('list', { searchData })
    dispatch({
      type: GET_BOARDLIST,
      payload: response,
    })
  } catch (error) {
    dispatch({
      type: GET_FAILED,
      payload: error,
    })
    throw error
  }
}

export const insertBoard = (title, content, insertUser) => async dispatch => {
  dispatch({ type: GET_REQUEST })
  try {
    const response = await getApi('insert', {
      title,
      content,
      insert_user: insertUser,
    })
    dispatch({
      type: INSERT_BOARD,
      payload: response,
    })
  } catch (error) {
    dispatch({
      type: GET_FAILED,
      payload: error,
    })
    throw error
  }
}

export const updateBoard = (id, title, content) => async dispatch => {
  dispatch({ type: GET_REQUEST })
  try {
    const response = await getApi('update', { id, title, content })
    dispatch({
      type: UPDATE_BOARD,
      payload: response,
    })
  } catch (error) {
    dispatch({
      type: GET_FAILED,
      payload: error,
    })
    throw error
  }
}

export const deleteBoard = id => async dispatch => {
  dispatch({ type: GET_REQUEST })
  try {
    const response = await getApi('delete', { id })
    dispatch({
      type: DELETE_BOARD,
      payload: response,
    })
  } catch (error) {
    dispatch({
      type: GET_FAILED,
      payload: error,
    })
    throw error
  }
}

const initial = {
  pending: false,
  error: false,
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
    case GET_REQUEST:
      return {
        ...state,
        pending: true,
        error: false,
      }
    case GET_BOARDLIST:
      return {
        ...state,
        pending: false,
        data: {
          ...action.payload,
        },
      }
    case INSERT_BOARD:
      return {
        ...state,
        pendig: false,
      }
    case UPDATE_BOARD:
      return {
        ...state,
        pending: false,
      }
    case DELETE_BOARD:
      return {
        ...state,
        pending: false,
      }
    case GET_FAILED:
      return {
        pending: false,
        error: true,
      }
    default:
      return state
  }
}

export default apiReducer
