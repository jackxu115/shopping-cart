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

    const dispatch = useDispatch()

    return (
        <div className="Music">
            <div className="Music_Image">
                <img width="400px" src={state.song.image} alt=""/>
            </div>

            <div className="Music_Content">
                <div className="Music_Content_Title">{state.song.title}</div>
                <div className="Music_Content_Artist"><span>Year</span>{state.song.year}</div>
                <div className="Music_Content_Length">IMDb: {state.song.imDbRating}</div>
                <div className="Music_Content_Price">Crew: {state.song.crew}</div>
            </div>
        </div>
    )
}