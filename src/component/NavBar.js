import {Link} from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="Nav">
            <Link className="link" to="/home">Home</Link>
            <Link className="link" to="/shop">Shop</Link>
            <Link className="link" to="/cart" type="button">Cart</Link>
        </nav>
    )
}