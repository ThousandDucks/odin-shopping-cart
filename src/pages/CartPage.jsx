
import './CartPage.css'
import { useOutletContext } from "react-router-dom";
import QuantitySelector from "../components/QuantitySelector"
import { useState } from "react";

function CartPage() {
    const { cart, setCart } = useOutletContext();
    const [quantity, setQuantity] = useState(1);

    function updateCartQuantity(id, quantity) {
        setCart(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, quantity }
                    : item
            )
        );
    }

    function removeFromCart(id) {
        setCart(prev =>
            prev.filter(item => item.id !== id)
        );
    }

    console.log(cart)
    return (
        <div>
            <h1 className="cart-header">Shopping Cart</h1>
            <div className='cart-container'>
                {cart.length === 0 ? (
                    <div className="empty-cart">
                        Your cart is currently empty.
                    </div>
                ) : (
                    <>
                    {cart.map(item => (
                        <div className='cart-item-wrapper' key={item.id}>
                            <div className='cart-item-left'>
                                <img className='cart-img' src={item.image} />
                                <div className='cart-item-details'>
                                    <div>{item.title}</div>
                                    <div>£{item.price}</div>
                                </div>
                            </div>

                            <div className='cart-item-right'>
                                <QuantitySelector
                                    item={item}
                                    quantity={item.quantity}
                                    setQuantity={(newQty) => updateCartQuantity(item.id, newQty)}
                                    showAddToCart={false}
                                    scale={0.8}
                                />
                                <button className='cart-remove' onClick={() => removeFromCart(item.id)}>Remove</button>
                            </div>
                        </div>
                    ))}

                    <div className='cart-total-checkout'>
                        <div className='cart-total'>Total:</div>
                        <button className='checkout-button'>Checkout</button>
                    </div>
                    </>
                )}

            </div>
        </div>
    );
}

export default CartPage