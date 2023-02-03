import React from "react"
import { Context } from "./Content"

function Image(props) {
    const [hovered , setHover] = React.useState(false)
    const {ToggleFav , AddCart , RemoveCart ,cartItems} = React.useContext(Context)


    function HeartIcon(){
        if(props.img.isFavorite){
            return <i className="ri-heart-fill favorite" onClick={() => ToggleFav(props.img.id)}></i>
        }

        else if(hovered)
        {
          return <i className="ri-heart-line favorite" onClick={() => ToggleFav(props.img.id)}></i>
        }  

        }


    function CartIcon(){
        const inCart = cartItems.some(item => item.id === props.img.id)

        if(inCart){
            return <i className="ri-shopping-cart-fill cart" onClick={() => RemoveCart(props.img.id)}></i>
        }
        else if(hovered){
            return <i className="ri-add-circle-line cart" onClick={() => AddCart(props.img)}></i>
        }

    }


    return (
        <div className={`${props.className} image-container`} 
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <img src={props.img.url} className="image-grid"/>
            {<HeartIcon />}
            {<CartIcon />}
        </div>
    )

}


export default Image