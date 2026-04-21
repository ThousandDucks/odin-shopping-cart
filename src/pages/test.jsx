import './test.css'
import { useEffect, useState } from "react";
import Nav from '../components/Nav'

function Test() {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            const categories = data.map(product => product.category);
            console.log(categories);
        });
    })


    return (
        <div>
            <Nav></Nav>
            <h1 className='test2'>Hello</h1>
        </div>
    )
}

export default Test