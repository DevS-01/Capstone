import React from "react"
import {Context} from "./Content"
import CartItems from "./CartItems"

function Cart() {
    const {cartItems , EmptyCart} = React.useContext(Context)

    const totalCost = 5.99*cartItems.length
    const costDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})

    const CartElements = cartItems.map(items => (
        <CartItems key={items.id} item={items}/>
    ))

        
    const [Placing , setPlace] = React.useState("Place Order")
    function Order(){
        setPlace("Ordering...")
        setTimeout(function(){
            console.log("Order Placed!")
            setPlace("Place Order")
            EmptyCart()
        } , 3000)
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {CartElements}
            <p className="total-cost">Total: {costDisplay}</p>
            {
                cartItems.length > 0 ?
                    <div className="order-button">
                        <button onClick={Order}>{Placing}</button>
                    </div> : 
                    <p>You have no items in your cart.</p>
            }
        </main>
    )
}

export default Cart