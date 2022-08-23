import {Link} from "react-router-dom";

export const NavBar = () => {
    return (
        <nav>
            <Link to="/home">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart" type="button">Cart</Link>
        </nav>
    )
}