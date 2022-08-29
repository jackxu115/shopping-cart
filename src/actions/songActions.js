import {actionType} from "../Helper";
import axios from "axios";
import {URL} from "../Helper"


const fetchSongBegin = () => ({
    type: actionType.FETCH_ALL_SONGS_BEGIN
})

const fetchSongSuccess = data => ({
        type: actionType.FETCH_ALL_SONGS_SUCCESS,
        payload: data.map(song => ({...song, cart: false, num: 0, subtotal: 0}))
})

const fetchSongFailure = error => ({
    type: actionType.FETCH_ALL_SONGS_FAILURE,
    payload: {error}
})

const addCart = (id, num) => ({
    type: actionType.ADD_CART,
    payload: {id, num}
})

const deleteCart = (id, num, cost) => ({
    type: actionType.DELETE_CART,
    payload: {id, num, cost}
})


const fetchData = () => {
    console.log("fetch data")
    return async dispatch => {
        dispatch(fetchSongBegin())
        try {
            const res = await axios.get(URL)
            dispatch(fetchSongSuccess(res.data.data))
        } catch (err) {
            dispatch(fetchSongFailure(err))
        }
    }
}

export default {
    fetchData,
    fetchSongBegin,
    fetchSongSuccess,
    fetchSongFailure,
    addCart,
    deleteCart
}
