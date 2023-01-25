import {useEffect, useState} from "react";
import "../style/Carousel.scss"
import {useSelector} from "react-redux";

export const Carousel = () => {

    let songs = useSelector(state => state.songReducer.rawData)
    console.log('songs', songs)

    const [index, setIndex] = useState(-1)

    useEffect(() => {
        const intervalID = setInterval(() => {
            if (index < songs.length - 1) {
                setIndex(index + 1)
            } else {
                setIndex(0)
            }
        }, 3000)
        return () => {
            clearInterval(intervalID)
        }
    }, [index])

    console.log(songs[index]?.image)
    return (
        <div className="Carousel">
            {songs[index]?.image && <img className="Image" src={`${songs[index]?.image}`} alt=""/>}
        </div>
    )
}