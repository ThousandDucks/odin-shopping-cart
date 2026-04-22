import { useParams } from "react-router-dom"
import './CategoryPage.css'
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom"


function CategoryPage() {
    const { categoryName } = useParams()
    const { product, setProduct } = useOutletContext();
    

    const categoryMap = {
        "mens-clothing": "men's clothing",
        "womens-clothing": "women's clothing",
        "jewelery": "jewelery"
    };

    const apiCategory = categoryMap[categoryName];

    const filteredProducts = product.filter(
        item => item.category === apiCategory
    );

    console.log(filteredProducts)

    const displayName = categoryMap[categoryName] || categoryName

    return (
        <div>
            <h1 className="cat-header">{displayName}</h1>
            <div className="cat-grid">
                {filteredProducts.map(item => (
                    <Link className="cat-card-link" to={`/product/${item.id}`}>
                        <div key={item.id} className="cat-card">
                            <div className="cat-card-img-wrapper">
                                <img className="cat-card-img" src={item.image} alt={item.title} />
                            </div>
                            <div className="cat-item-text">
                                <div>{item.title}</div>
                                <div>£{item.price}</div>
                                <div>★ {item.rating.rate} ({item.rating.count})</div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default CategoryPage