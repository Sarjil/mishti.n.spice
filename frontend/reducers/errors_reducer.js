import sessionErrors from './session_errors_reducer'
import {combineReducers} from 'redux'

export const errorsReducer = combineReducers({
    session: sessionErrors
})

export default errorsReducer;