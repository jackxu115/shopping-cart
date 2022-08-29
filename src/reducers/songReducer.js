import {actionType} from "../Helper";


const initState = {
    rawData: [],
    loading: false,
    error: null,
    totalNum: 0,
    totalCost: 0
}

export const songReducer = (state = initState, action) => {

    let newData = [...state.rawData]
    let total = state.totalNum
    let totalCost = state.totalCost

    switch (action.type) {
        case actionType.FETCH_ALL_SONGS_BEGIN:
            console.log(`[reducer] ${actionType.FETCH_ALL_SONGS_BEGIN}`, action.payload)
            return {...state, loading: true, error: null}

        case actionType.FETCH_ALL_SONGS_SUCCESS:
            console.log(`[reducer] ${actionType.FETCH_ALL_SONGS_SUCCESS}`, action.payload)
            return {...state, loading: false, rawData: action.payload}

        case actionType.FETCH_ALL_SONGS_FAILURE:
            console.log(`[reducer] ${actionType.FETCH_ALL_SONGS_FAILURE}`, action.payload)
            return {...state, loading: false, error: action.payload.error, rawData: []}

        case actionType.ADD_CART:
            console.log(`[reducer] ${actionType.ADD_CART}`, action.payload)

            const id = action.payload.id

            newData = newData.map(element =>
                element.id === id ? {
                    ...element,
                    cart: true,
                    num: action.payload.num + element.num,
                    subtotal: element.subtotal + action.payload.num * element.price
                } : element)

            total = state.totalNum + action.payload.num
            totalCost = state.totalCost + action.payload.num * state.rawData[id - 1].price

            return {...state, rawData: newData, totalNum: total, totalCost: totalCost}

        case actionType.DELETE_CART:
            console.log(`[reducer] ${actionType.DELETE_CART}`, action.payload)

            const delId = action.payload.id

            newData = newData.map(element =>
                element.id === delId ? {
                    ...element,
                    cart: false,
                    num: 0,
                    subtotal: 0
                } : element)

            total = state.totalNum - action.payload.num
            totalCost = state.totalCost - action.payload.cost

            return {...state, rawData: newData, totalNum: total, totalCost: totalCost}

        default:
            return state
    }
}