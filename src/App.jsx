import React from "react";
import { useState } from "react";
import CardProduto from "./CardProduto";
import Carrinho from "./Carrinho";
import './App.css'
// ---------------- Tabela gerada por IA ----------------------
const produtos = [
  { id: 1, name: "Tênis de Corrida Pro", price: 349.9 },
  { id: 2, name: "Relógio GPS Runner", price: 599.9 },
  { id: 3, name: "Camiseta Dry-Fit", price: 89.9 },
  { id: 4, name: "Garrafa Térmica 500ml", price: 59.9 },
];

export default function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [busca, setBusca] = useState("");

  function handleAdd(produto) {
    const existe = carrinho.find((item) => item.id === produto.id);

    if (existe) {
      handleIncrease.add(produto.id);
    } else {
      setCarrinho([...carrinho, { ...produto, quantidade: 1 }]);
    }
  }

  function handleIncrease(id) {
    setCarrinho(
      carrinho.map((item) =>
        item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item,
      ),
    );
  }

  function handleDecrease(id) {
    setCarrinho(
      carrinho.map((item) =>
        item.id === id && item.quantidade > 1
          ? { ...item, quantidade: item.quantidade - 1 }
          : item,
      ),
    );
  }

  function handleRemove(id) {
    setCarrinho(carrinho.filter((item) => item.id !== id));
  }

  function handleSearchChange(e) {
    setBusca(e.target.value);
  }

  const produtosFiltrados = produtos.filter((p) =>
    p.name.toLowerCase().includes(busca.toLowerCase()),
  );

  return (
    <div className="app-content">
      <h1>Equipamentos de Corrida</h1>

      <input
        type="text"
        placeholder="Buscar produto..."
        value={busca}
        onChange={handleSearchChange}
      />

      <div className="lista-produto">
        {produtosFiltrados.map((produto) => (
          <CardProduto key={produto.id} produto={produto} onAdd={handleAdd} />
        ))}
      </div>

      <Carrinho
        carrinho={carrinho}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        onRemove={handleRemove}
      />
    </div>
  );
}
