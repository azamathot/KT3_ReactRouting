import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

const API_URL = "https://fakestoreapi.com/products";

export const StarRating = ({ rating }) => {
    const roundedRating = Math.round(rating);
    return (
        <div className="stars">
            {[...Array(5)].map((_, i) => (
                <span key={i} className={i < roundedRating ? "star filled" : "star"}>
                    ★
                </span>
            ))}
        </div>
    );
};

const ProductsList = () => {
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    console.log("data: " + products);
    return (
        <div className="products-list">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <Link to={`/product/${product.id}`}>{product.title}</Link>
                    <StarRating rating={product.rating.rate} />
                </div>
            ))}
        </div>
    );
};

export default ProductsList;