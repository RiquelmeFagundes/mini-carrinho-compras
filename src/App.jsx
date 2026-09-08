import React from "react";
import { useState } from "react";

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
  }

  if (existe) {
    handIncrease.add(produto.id);
  } else {
    setCarrinho([...carrinho, { produto, quantidade: 1 }]);
  }

  function handIncrease(id) {
    setCarrinho(
      carrinho.map((item) =>
        item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
      )
    );
  }

  function handDecrese(id) {
    setCarrinho(
      carrinho.map((item) =>
      item.id === id ? {...item, quantidade: item.quantidade - 1} : item)
    )
  })

  return <div></div>;
}
