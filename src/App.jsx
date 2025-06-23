import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProductCard from './componentes/ProductCard/ProductCard' // Importa não utilizado, pode ser removido se não for usado em outros lugares
import CadastrarProduto from './componentes/CadastrarProduto/CadastrarProduto' // Importa não utilizado, pode ser removido
import Admin from './pages/Admin/Admin'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom' // <-- CORREÇÃO AQUI: Importe BrowserRouter

function App() {
  return (
    <>
      <BrowserRouter> {/* <-- CORREÇÃO AQUI: Use BrowserRouter */}
        <Routes>
          <Route path='/' element={<Admin />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App