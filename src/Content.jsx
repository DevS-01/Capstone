import React from "react";

const Context = React.createContext()

function Provider(props)
{
    const [allPhotos , setPhotos] = React.useState([])

    const [cartItems , setCart] = React.useState([])

    React.useEffect(() => {
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then(res => res.json())
            .then(data => setPhotos(data))
    } , [])

    function ToggleFav(id){
        const updated = allPhotos.map(photo =>{

            if(photo.id === id){
                return{
                    ...photo,
                    isFavorite: !photo.isFavorite
                }
                    
            }
    
            return photo
        }) 
        
        setPhotos(updated)
            
    }

    function AddCart(newItem){
        setCart(prev => [...prev , newItem])
    }

    function RemoveCart(id){
        setCart(prev => prev.filter(item => item.id !== id))
    }

    function EmptyCart(){
        setCart([])
    }

    return(
        <Context.Provider value={{allPhotos , ToggleFav ,AddCart , RemoveCart , cartItems , EmptyCart}}>
            {props.children}
        </Context.Provider>
    )
}



export {Provider , Context}
