
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import Nav from './components/Nav'
import './App.css'
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
    const [product, setProduct] = useState([]);
    const [cartQuantity, setCartQuantity] = useState(0);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setProduct(data);
        });
    }, [])

    return (
        <div>
            <Nav cartQuantity={cartQuantity}></Nav>
            <Outlet context={{ product, setProduct, cartQuantity, setCartQuantity }}></Outlet>
        </div>

    )
}

export default App;