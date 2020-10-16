export const fetchCupcakes = cupcakes =>(
    $.ajax({
        method: "GET",
        url: "/api/cupcakes",
        data: {cupcakes}
    })
)

export const fetchCupcake = cupcakeId =>(
    $.ajax({
        method: "GET",
        url: `/api/cupcakes/${cupcakeId}`
    })
)

export const createCupcake = cupcake =>(
    $.ajax({
        method: "POST",
        url: "/api/cupcakes",
        data: {cupcake}
    })
)

export const updateCupcake = cupcake =>(
    $.ajax({
        method: "PATCH",
        url: `/api/cupcakes/${cupcake.id}/`,
        data: {cupcake}
    })
)