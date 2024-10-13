import React, { useState } from "react"; // Importando React e useState
import axios from "axios"; // Importando axios para fazer requisições HTTP

const ProductForm = ({ fetchProdutos }) => {
    const [nome, setNome] = useState(""); // Estado para armazenar o nome do produto
    const [categoria, setCategoria] = useState(""); // Estado para armazenar a categoria do produto
    const [preco, setPreco] = useState(""); // Estado para armazenar o preço do produto
    const [quantidadeEmEstoque, setQuantidadeEmEstoque] = useState(""); // Estado para armazenar a quantidade em estoque

    const handleSubmit = async (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário
        try {
            // Envia os dados do novo produto para a API
            const response = await axios.post(
                "http://127.0.0.1:8000/api/produtos/",
                {
                    nome,
                    categoria,
                    preco,
                    quantidade_em_estoque: quantidadeEmEstoque, // Ajuste o nome para o que está na API
                }
            );
            console.log("Produto adicionado:", response.data); // Loga o produto adicionado

            // Chama fetchProdutos para atualizar a lista de produtos
            fetchProdutos();

            // Limpa os campos após a adição
            setNome("");
            setCategoria("");
            setPreco("");
            setQuantidadeEmEstoque("");
        } catch (error) {
            console.error("Erro ao adicionar produto:", error); // Loga o erro no console
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

export default ProductForm; // Exporta o componente
