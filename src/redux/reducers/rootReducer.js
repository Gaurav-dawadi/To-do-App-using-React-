import { combineReducers } from 'redux'
import addReducer from './Reducer'

const rootReducer = combineReducers({
    allReducer: addReducer,
})

export default rootReducer