
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import Nav from './components/Nav'
import './App.css'
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
    const [product, setProduct] = useState([]);

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
            <Nav></Nav>
            <Outlet context={{ product, setProduct }}></Outlet>
        </div>

    )
}

export default App;