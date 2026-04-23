
import Nav from './components/Nav'
import './App.css'
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from './components/Footer'

function App() {
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([]);

    const cartQuantity = cart.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    function addToCart(product, quantityToAdd) {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);

            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantityToAdd }
                        : item
                );
            }

            return [...prevCart, { ...product, quantity: quantityToAdd }];
        });
    }


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            setProduct(data);
        });
    }, [])

    return (
        <div>
            <Nav cartQuantity={cartQuantity}></Nav>
            <Outlet context={{ product, cart, setCart, addToCart }} />
            <Footer></Footer>
        </div>

    )
}

export default App;