import {actionType} from "../Helper";


const initState = {
    rawData: [],
    loading: false,
    error: null
}

export const songReducer = (state = initState, action) => {
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

        default:
            return state
    }
}