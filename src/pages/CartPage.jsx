
import './CartPage.css'
import { useOutletContext } from "react-router-dom";
import QuantitySelector from "../components/QuantitySelector"

function CartPage() {
    const { cart } = useOutletContext();

    console.log(cart)
    return (
        <div>
            <h1 className="cart-header">Shopping Cart</h1>
            <div className='cart-container'>
                {cart.map(item => (
                    <div className='cart-item-wrapper'>
                        <img className='cart-img' src={item.image}></img>
                        <div className='cart-item-details'>
                            <div>{item.title}</div>
                            <div>£{item.price}</div>
                        </div>
                        <QuantitySelector className="cart-quantity-selector" item={item} showAddToCart={false} scale={0.8}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CartPage