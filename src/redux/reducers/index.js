import { combineReducers } from 'redux'
import AuthReducer from './AuthReducers'
import PostReducer from './PostReducers'

export default combineReducers({
    Auth: AuthReducer,
    Post: PostReducer
})