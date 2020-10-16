import {RECEIVE_CUPCAKES, RECEIVE_CUPCAKE, RECEIVE_CUPCAKE_ERRORS} from '../actions/cupcake_actions'

const cupcakesReducer = (oldState = {}, action) =>{
    Object.freeze(oldState);
    switch(action.type){
        case RECEIVE_CUPCAKES:
            return action.cupcakes;
        case RECEIVE_CUPCAKE:
            const newCupcake = {[action.cupcake.id]: action.cupcake}
            return Object.assign({}, oldState, newCupcake)
        default:
            return oldState;
    }
}

export default cupcakesReducer;