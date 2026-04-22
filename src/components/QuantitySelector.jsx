
import './QuantitySelector.css'
import { useState } from 'react'
import { useOutletContext } from "react-router-dom";

function QuantitySelector() {
    const [quantity, setQuantity] = useState(1);
    const { cartQuantity, setCartQuantity } = useOutletContext();

    console.log(cartQuantity)

    function handleQuantity(type) {
        if (type === "increase") {
            setQuantity(q => q + 1);
        }

        if (type === "decrease") {
            setQuantity(q => Math.max(1, q - 1));
        }
    }

    function handleCart() {
        setCartQuantity(q => q + quantity);
    }

    return (
        
        <div className='quantity-cart'>
            <div className='quantity-container'>
                <button onClick={() => handleQuantity("decrease")}>−</button>
                <div>{ quantity }</div>
                <button onClick={() => handleQuantity("increase")}>+</button>
            </div>
            <button onClick={() => handleCart()} className='add-to-cart'>Add to cart</button>
        </div>
    )
}

export default QuantitySelector