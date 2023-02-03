import React from "react";
import {Context} from "./Content"

function CartItems(props){
    const {RemoveCart} = React.useContext(Context)
    const[bin , setBin] = React.useState(false)

    const Bin = bin ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return(
        <div className="cart-item">
            <i className={Bin} 
                onClick={() => RemoveCart(props.item.id)}
                onMouseEnter={() => setBin(true)}
                onMouseLeave={() => setBin(false)}
            >
            </i>
            <img src={props.item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItems