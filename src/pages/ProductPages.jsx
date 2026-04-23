
import './ProductPages.css'
import { useOutletContext } from "react-router-dom";
import { useParams } from "react-router-dom";
import QuantitySelector from "../components/QuantitySelector"


function ProductPages() {
    const { product, setProduct } = useOutletContext();
    const { id } = useParams();

    if (!product || product.length === 0) {
        return <div>Loading...</div>;
    }

    const item = product.find(p => p.id === Number(id));

    if (!item) {
        return <div>Product not found</div>;
    }

    return (
        <div className='product-container'>
            <div>
                <img className='product-image' src={item.image} alt={item.title} />
            </div>
            <div className='product-details'>
                <div className='product-text'>
                    <div>{item.title}</div>
                    <div>{item.description}</div>
                </div>
                <div className='product-price-rating'>
                    <div className='product-price'>£{item.price}</div>
                    <div className='product-rating'>
                        <div className="stars">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span key={star} style={{color: star <= Math.round(item.rating.rate) ? "black" : "#ccc"}}>★</span>
                            ))}
                        </div>
                        <div>{item.rating.rate}</div>
                        <div>({item.rating.count})</div>
                    </div>
                </div>
                <QuantitySelector item={item}></QuantitySelector>
            </div>
        </div>
    )
}

export default ProductPages