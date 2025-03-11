import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate();
    return (
        <div className="not-found">
            <h1>Страница не найдена</h1>
            <button onClick={() => navigate("/products")}>На список товаров
            </button>
        </div>
    );
};

export default NotFoundPage;