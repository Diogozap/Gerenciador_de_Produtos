import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // Importando Link para navegação

const ProductList = ({ produtos, fetchProdutos }) => {
    // Recebendo produtos como prop
    const [error, setError] = React.useState(null);

    useEffect(() => {
        fetchProdutos(); // Chama a função para buscar produtos ao montar o componente
    }, [fetchProdutos]);

    if (error) {
        return <div>{error}</div>;
    }

   
    return (
        <div className="container">
            <h1>Lista de Produtos</h1>
            <Link to="/add">Adicionar Produto</Link>{" "}
            {produtos.length > 0 ? (
                produtos.map((produto) => (
                    <div className="product-item" key={produto.id}>
                        <h2>{produto.nome}</h2>
                        <p>Categoria: {produto.categoria}</p>
                        <p>Preço: R${produto.preco}</p>
                        <p>
                            Quantidade em Estoque:{" "}
                            {produto.quantidade_em_estoque}
                        </p>
                    </div>
                ))
            ) : (
                <p>Nenhum produto encontrado.</p>
            )}
        </div>
    );
};

export default ProductList; // Exporta o componente
