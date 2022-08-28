import "../style/Shop.scss"
import {useSelector} from "react-redux";
import SongRow from "./SongRow";

export const Shop = () => {

    let songs = useSelector(state => state.songReducer.rawData)

    return (
        <div className="Shop">
            {
                songs.map((element, index) =>
                    <SongRow key={index} song={element}/>)
            }

        </div>
    )
}