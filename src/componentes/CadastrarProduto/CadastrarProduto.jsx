// src/componentes/CadastrarProduto/CadastrarProduto.jsx
import React, { useState, useEffect } from 'react';
import './CadastrarProduto.css';

// Adicionamos a prop 'onClose' para o caso de querermos um botão de cancelar
const CadastrarProduto = ({ onSubmit, productToEdit, onClose }) => {
  const [product, setProduct] = useState({ 
    nome: '', 
    preco: '', 
    imagem: '', 
    categoria: '', 
    descricao: '' 
  });

  useEffect(() => {
    if (productToEdit) {
      setProduct(productToEdit);
    } else {
      setProduct({ nome: '', preco: '', imagem: '', categoria: '', descricao: '' });
    }
  }, [productToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(product);
    // A limpeza do formulário e o fechamento do modal agora são gerenciados pelo Admin.jsx
  };

  return (
    // O div 'form-container' pode ser mantido ou removido, 
    // dependendo de como você estiliza o conteúdo do modal.
    <div className='form-container'> 
      <h2>{productToEdit ? 'Editar' : 'Adicionar Novo'} Produto</h2>
      <form onSubmit={handleSubmit} className='form'>
        <div className='input-grp'>
          <label htmlFor="nome">Nome</label>
          <input
            name="nome"
            id='nome'
            value={product.nome}
            onChange={handleChange}
            placeholder="Nome do Produto"
            required
          />
        </div>
        <div className='input-grp'>
          <label htmlFor="preco">Preço</label>
          <input
            name="preco"
            id='preco'
            type="number"
            value={product.preco}
            onChange={handleChange}
            placeholder="Preço"
            required
          />
        </div>
        <div className='input-grp'>
          <label htmlFor="descricao">Descrição</label>
          <textarea
            name="descricao"
            id='descricao'
            value={product.descricao}
            onChange={handleChange}
            placeholder="Descrição"
            required
          />
        </div>
        <div className='input-grp'>
          <label htmlFor="imagem">URL da Imagem:</label>
          <input
            type="text"
            id="imagem"
            name="imagem"
            value={product.imagem}
            onChange={handleChange}
            placeholder="Insira a URL da imagem"
            required
          />
        </div>
        <div className='input-grp'>
          <label htmlFor="categoria">Categoria:</label>
          <input
            type="text"
            id="categoria"
            name="categoria"
            value={product.categoria}
            onChange={handleChange}
            placeholder="Insira a categoria do produto"
            required
          />
        </div>
        <div className="form-buttons">
          <button type="submit" className="submit-btn">{productToEdit ? 'Atualizar' : 'Adicionar'} Produto</button>
          {/* Botão opcional para cancelar/fechar usando a função passada via props */}
          <button type="button" onClick={onClose} className="cancel-btn">Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default CadastrarProduto;