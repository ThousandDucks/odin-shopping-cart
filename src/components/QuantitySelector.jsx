
import './QuantitySelector.css'
import { useState } from 'react'

function QuantitySelector() {
    const [quantity, setQuantity] = useState(1);
    console.log(quantity)

    function handleQuantity(type) {
        if (type === "increase") {
            setQuantity(q => q + 1);
        }

        if (type === "decrease") {
            setQuantity(q => Math.max(1, q - 1));
        }
    }

    return (
        <div className='quantity-container'>
            <button onClick={() => handleQuantity("decrease")}>−</button>
            <div>{ quantity }</div>
            <button onClick={() => handleQuantity("increase")}>+</button>
        </div>
    )
}

export default QuantitySelector