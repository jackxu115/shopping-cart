import "../style/SongRow.scss"
import {Link} from "react-router-dom";

const SongRow = ({song}) => {

    return (
        <div className="songRow">
            <div className="songRow_Image">
                <Link
                    to={`/shop/${song.title}`}
                    state={{
                        song: song
                    }}
                >
                    <img width="150px" src={song.cover} alt=""/>
                </Link>
            </div>
            <div className="songRow_Content">
                <div className="songRow_Content_Title">{song.title}</div>
                <div className="songRow_Content_Artist">{song.artist}</div>
            </div>
            <div className="songRow_Price">${song.price}</div>
        </div>
    )
}

export default SongRow