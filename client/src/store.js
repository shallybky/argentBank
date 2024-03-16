import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import {thunk} from 'redux-thunk'
import { userReducer } from './redux/reducers/userReducers'
import { loginReducer } from './redux/reducers/loginReducers'
import { persistStore, persistReducer } from 'redux-persist'

import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  userLogin: loginReducer,
  userProfile: userReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = [thunk]

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export const persistor = persistStore(store)
export default store
