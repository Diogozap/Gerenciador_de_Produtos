import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import "./App.css";

const App = () => {
    const [produtos, setProdutos] = React.useState([]);

    const fetchProdutos = async () => {
        try {
            const response = await axios.get(
                "http://127.0.0.1:8000/api/produtos/"
            );
            setProdutos(response.data);
        } catch (error) {
            console.error("Erro ao buscar produtos:", error);
        }
    };

   return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <ProductList
                            produtos={produtos}
                            fetchProdutos={fetchProdutos}
                        />
                    }
                />
                <Route
                    path="/add"
                    element={<ProductForm fetchProdutos={fetchProdutos} />}
                />
            </Routes>
        </Router>
    );
};

export default App;
