import {actionType} from "../Helper";


const initState = {
    rawData: [],
    loading: false,
    error: null,
    totalNum: 0,
}

export const songReducer = (state = initState, action) => {

    let newData = [...state.rawData]

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
                element.id === id ? {...element, cart: true, num: action.payload.num} : element)
            let total = state.totalNum + action.payload.num
            return {...state, rawData: newData, totalNum: total}

        default:
            return state
    }
}