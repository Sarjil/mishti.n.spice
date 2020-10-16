import * as CupcakeUtil from '../util/cupcake_util';

export const RECEIVE_CUPCAKES = "RECEIVE_CUPCAKES";
export const RECEIVE_CUPCAKE = "RECEIVE_CUPCAKE"
export const RECEIVE_CUPCAKE_ERRORS = "RECEIVE_CUPCAKE_ERRORS"

const receiveCupcake = cupcake => ({
    type: RECEIVE_CUPCAKE,
    cupcake
})

const receiveCupcakes = cupcakes => ({
    type: RECEIVE_CUPCAKES,
    cupcakes
})

const receiveCupcakeErorrs = errors =>({
    type: RECEIVE_CUPCAKE_ERRORS,
    errors
})

export const fetchCupcake = cupcakeId => dispatch =>(
    CupcakeUtil.fetchCupcake(cupcakeId).then(cupcake => dispatch(receiveCupcake(cupcake)))
)

export const fetchCupcakes =  () => dispatch =>(
    CupcakeUtil.fetchCupcakes().then(cupcakes => dispatch(receiveCupcakes(cupcakes)))
)

export const createCupcake = cupcake => dispatch =>(
    CupcakeUtil.createCupcake(cupcake).then(
        cupcake => dispatch(receiveCupcake(cupcake)),
        errors => dispatch(receiveCupcakeErorrs(errors.responseJSON))
    )
)

export const updateCupcake = cupcake => dispatch =>(
    CupcakeUtil.updateCupcake(cupcake).then(
        cupcake => dispatch(receiveCupcake(cupcake)),
        errors => dispatch(receiveCupcakeErorrs(errors.responseJSON))
    )
)