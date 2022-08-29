import "../style/Cart.scss"
import {useSelector} from "react-redux";
import {CartRow} from "./CartRow";
import {Link} from "react-router-dom"


export const Cart = () => {

    let songs = useSelector(state => state.songReducer.rawData)
    let totalCost = useSelector(state => state.songReducer.totalCost)
    let totalNum = useSelector(state => state.songReducer.totalNum)

    return (
        <>
            {totalNum === 0 ?
                <div style={{marginTop: "40px",color: "black", fontSize: "50px", textAlign: "Center"}}>
                    Your Cart is Empty
                </div>
                :
                <div className="Cart">
                    <div className="Cart_Shop">
                        <div className="Cart_Shop_Header">
                            <div className="Cart_Shop_Header_Heading">Cart</div>
                            <div className="Cart_Shop_Header_Price">Price</div>
                        </div>

                        <div className="Cart_Shop_List">
                            {
                                songs.filter(element => element.cart)
                                    .map((element, index) =>
                                        <CartRow key={index} song={element}/>)
                            }
                        </div>

                    </div>
                    <div className="Cart_Checkout">
                        <div className="Cart_Checkout_Subtotal">Subtotal: ${parseFloat(totalCost).toFixed(2)}</div>
                        <div className="Cart_Checkout_CheckoutBtn">
                            <button className="Cart_Checkout_CheckoutBtn_Button">
                                <Link className="Cart_Checkout_CheckoutBtn_Button_Link" to={"/checkout"}>
                                    Proceed to Checkout
                                </Link>
                            </button>
                        </div>
                    </div>

                </div>
            }
        </>
    )

}