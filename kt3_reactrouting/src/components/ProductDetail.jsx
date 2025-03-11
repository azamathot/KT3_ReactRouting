import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import { StarRating } from "./ProductsList"; // ✅ Импортируем StarRating

const API_URL = "https://fakestoreapi.com/products";

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = React.useState(null);
    const navigate = useNavigate();

    React.useEffect(() => {
        fetch(`${API_URL}/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return (
        <div className="product-detail">
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} />
            <p>Price: {product.price} $</p>
            <p>{product.description}</p>
            <StarRating rating={product.rating.rate} />
            <button onClick={() => navigate(-1)}>Назад</button>
        </div>
    );
};

export default ProductDetail;