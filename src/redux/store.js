import rootReducer from './reducers/reducer'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
// import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootSaga from '../sagas'

// middleware apply
const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware, logger]
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)
store.sagaTask = sagaMiddleware.run(rootSaga)

// action -> (middleware) -> dispatch -> reducer -> store
// 로그인 상태, 권한 검증

export default store
