import {RECEIVE_SESSION_ERRORS, 
    DELETE_SESSION_ERRORS, 
    RECEIVE_CURRENT_USER} from '../actions/session_actions'

export const sessionErrors = (state = {}, action) =>{
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case DELETE_SESSION_ERRORS:
            return [];
        case RECEIVE_CURRENT_USER:
            return [];
        default:
            return state;
    }
}

export default sessionErrors; 
