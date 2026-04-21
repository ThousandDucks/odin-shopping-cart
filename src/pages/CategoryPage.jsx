import { useParams } from "react-router-dom"
import './CategoryPage.css'

function CategoryPage() {
    const { categoryName } = useParams()
    
    const categoryMap = {
        "mens-clothing": "Men's Clothing",
        "womens-clothing": "Women's Clothing",
        "jewelery": "Jewelery"
    }

    const displayName = categoryMap[categoryName] || categoryName

    return (
        <h1 className="cat-header">{displayName}</h1>
    )
}

export default CategoryPage