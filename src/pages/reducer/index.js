import { combineReducers } from 'redux'
import listReducer from './listReducer'
import movieReducer from './movieReducer';
const rootReducer = combineReducers ({
movieReducer,
listReducer,

})

export default rootReducer