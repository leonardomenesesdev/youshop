// src/pages/Admin.jsx
import React, { useState, useEffect } from 'react'; // -> 1. IMPORTE O useEffect
import { crudProdutos } from '../../hooks/crudProdutos';
import CadastrarProduto from '../../componentes/CadastrarProduto/CadastrarProduto';
import ProductCardAdm from '../../componentes/ProductCardAdm/ProductCardAdm';
import './Admin.css';

const Admin = () => {
  // -> 2. GARANTA QUE getProdutos está sendo importado do seu hook
  const { produtos, getProdutos, createProduto, deleteProduto } = crudProdutos();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // -> 3. USE useEffect PARA BUSCAR A LISTA INICIAL DE PRODUTOS
  // O array vazio [] no final garante que isso só rode uma vez, quando o componente montar.
  useEffect(() => {
    getProdutos();
  }, []);

  const handleDeleteProduct = async (productId) => {
    if (window.confirm("Tem certeza que deseja deletar este produto?")) {
      await deleteProduto(productId);
      await getProdutos(); // -> 4. RECARREGUE OS PRODUTOS APÓS DELETAR
    }
  };

  const handleFormSubmit = async (productData) => {
    await createProduto(productData);
    await getProdutos(); // -> 5. RECARREGUE OS PRODUTOS APÓS ADICIONAR
    setIsModalOpen(false); 
  };

  return (
    <div className='admin-container'>
      <h1>Painel do Administrador</h1>
      
      <button onClick={() => setIsModalOpen(true)} className='add-product-btn'>
        Adicionar produto
      </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button onClick={() => setIsModalOpen(false)} className="close-modal-btn">
              &times;
            </button>
            <CadastrarProduto 
              onSubmit={handleFormSubmit} 
              onClose={() => setIsModalOpen(false)} 
            />
          </div>
        </div>
      )}

      <div className='products'>
        {produtos.map((product) => (
          <ProductCardAdm 
            key={product.id} 
            product={product} 
            onDelete={handleDeleteProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default Admin;