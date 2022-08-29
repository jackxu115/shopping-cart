import "../style/CartRow.scss"
import {useDispatch} from "react-redux";
import actions from "../actions";


export const CartRow = ({song}) => {

    const dispatch = useDispatch()

    return (
        <div className="CartRow">
            <div className="CartRow_Image">
                <img width="150px" src={song.cover} alt="" />
            </div>
            <div className="CartRow_Info">
                <div className="CartRow_Info_Title">{song.title}</div>
                <div className="CartRow_Info_Artist">by {song.artist}</div>
                <div className="CartRow_Info_Num">Quantity: {song.num}</div>
                <div className="CartRow_Info_DeleteBtn">
                    <button onClick={()=>dispatch(actions.songActions.deleteCart(song.id, song.num, song.subtotal))}>Delete</button>
                </div>
            </div>
            <div className="CartRow_Cost">$ {parseFloat(song.subtotal.toFixed(2))}</div>
        </div>
    )
}