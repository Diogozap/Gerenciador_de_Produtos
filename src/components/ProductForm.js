import React, { useState } from "react";
import axios from "axios";

const ProductForm = ({ fetchProdutos }) => {
    const [nome, setNome] = useState(""); 
    const [categoria, setCategoria] = useState("");
    const [preco, setPreco] = useState(""); 
    const [quantidadeEmEstoque, setQuantidadeEmEstoque] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/produtos/",
                {
                    nome,
                    categoria,
                    preco,
                    quantidade_em_estoque: quantidadeEmEstoque, 
                }
            );
            console.log("Produto adicionado:", response.data); 

            fetchProdutos();

            setNome("");
            setCategoria("");
            setPreco("");
            setQuantidadeEmEstoque("");
        } catch (error) {
            console.error("Erro ao adicionar produto:", error); 
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h2>Adicionar Produto</h2>
                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Categoria:</label>
                    <input
                        type="text"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Preço:</label>
                    <input
                        type="number"
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Quantidade em Estoque:</label>
                    <input
                        type="number"
                        value={quantidadeEmEstoque}
                        onChange={(e) => setQuantidadeEmEstoque(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Cadastrar Produto</button>
            </form>
        </div>
    );
};

export default ProductForm; 
