import rootReducer from './reducers/reducer'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// middleware apply
const middleware = [thunk, logger]

// action -> (middleware) -> dispatch -> reducer -> store
// 로그인 상태, 권한 검증
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
