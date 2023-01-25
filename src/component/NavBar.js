import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const NavBar = () => {

    let totalNum = useSelector(state => state.songReducer.totalNum)

    return (
        <nav className="Nav">
            <Link className="link" to="/home">Home</Link>
            <Link className="link" to="/library">Library</Link>
        </nav>
    )
}