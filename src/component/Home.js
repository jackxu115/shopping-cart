import {Carousel} from "./Carousel";
import '../style/Home.scss'
import {Link} from "react-router-dom"

export const Home = () => {

    return (
        <div className="Home">
            <div className="Heading">
                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing.</h2>
            </div>
            <Carousel />

        </div>
    )
}