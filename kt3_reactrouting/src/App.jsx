import './App.css'

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//npm install react - router - dom
import ProductsList from "./components/ProductsList";
import ProductDetail from "./components/ProductDetail";
import NotFoundPage from "./components/NotFoundPage";

//const API_URL = "https://fakestoreapi.com/products";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/products" element={<ProductsList />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


//function App() {
//  const [count, setCount] = useState(0)

//  return (
//    <>
//      <div>
//        <a href="https://vite.dev" target="_blank">
//          <img src={viteLogo} className="logo" alt="Vite logo" />
//        </a>
//        <a href="https://react.dev" target="_blank">
//          <img src={reactLogo} className="logo react" alt="React logo" />
//        </a>
//      </div>
//      <h1>Vite + React</h1>
//      <div className="card">
//        <button onClick={() => setCount((count) => count + 1)}>
//          count is {count}
//        </button>
//        <p>
//          Edit <code>src/App.jsx</code> and save to test HMR
//        </p>
//      </div>
//      <p className="read-the-docs">
//        Click on the Vite and React logos to learn more
//      </p>
//    </>
//  )
//}

export default App
