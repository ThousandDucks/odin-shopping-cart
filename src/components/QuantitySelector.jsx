
import './QuantitySelector.css'
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";

function QuantitySelector({ item, quantity, setQuantity, showAddToCart = true, scale = 1 }) {
    const { addToCart } = useOutletContext();

    function handleQuantity(type) {
        if (type === "increase") {
            setQuantity(quantity + 1);
        }

        if (type === "decrease") {
            setQuantity(Math.max(1, quantity - 1));
        }
    }

    return (
        
        <div className="quantity-cart" style={{ transform: `scale(${scale})` }}>
            <div className='quantity-container'>
                <button onClick={() => handleQuantity("decrease")}>−</button>
                <div>{ quantity }</div>
                <button onClick={() => handleQuantity("increase")}>+</button>
            </div>
            {showAddToCart && (
                <button onClick={() => addToCart(item, quantity)} className='add-to-cart'>Add to cart</button>
            )}
        </div>
    )
}

export default QuantitySelector