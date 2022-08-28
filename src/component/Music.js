import {useLocation, useParams} from "react-router-dom";
import "../style/Music.scss"
import {useDispatch} from "react-redux";
import actions from "../actions";
import {useState} from "react";


export const Music = () => {

    const [num, setNum] = useState(1)

    const cbInput = event => {
        const num = parseInt(event.target.value)
        setNum(num)
    }

    const {state} = useLocation()
    console.log('state', state.song)

    const dispatch = useDispatch()

    return (
        <div className="Music">
            <div className="Music_Image">
                <img width="400px" src={state.song.cover} alt=""/>
            </div>

            <div className="Music_Content">
                <div className="Music_Content_Title">{state.song.title}</div>
                <div className="Music_Content_Artist"><span>by</span>{state.song.artist}</div>
                <div className="Music_Content_Length">Length: {state.song.length}</div>
                <div className="Music_Content_Price">${state.song.price}</div>
            </div>
            <div className="Music_Button">
                <div className="Music_Button_Qty">
                    <label htmlFor="quantity">Quantity:</label>
                    <input type="number" min="1" max="100" defaultValue={1} onChange={cbInput}/>
                </div>
                <div className="Music_Button_Cart">
                    <button
                        onClick={() => dispatch(actions.songActions.addCart(state.song.id, num))}
                    >Add to cart</button>
                </div>
            </div>
        </div>
    )
}