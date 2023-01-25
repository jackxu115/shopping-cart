import "../style/SongRow.scss"
import {Link} from "react-router-dom";

const SongRow = ({song}) => {
    console.log(song)
    return (
        <div className="songRow">
            <div className="songRow_Image">
                <Link
                    to={`/library/${song.title}`}
                    state={{
                        song: song
                    }}
                >
                    <img width="150px" src={song.image} alt=""/>
                </Link>
            </div>
            <div className="songRow_Content">
                <div className="songRow_Content_Title">{song.title}</div>
                <div className="songRow_Content_Artist">{song.artist}</div>
            </div>
        </div>
    )
}

export default SongRow