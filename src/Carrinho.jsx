import React from 'react'

export default function Carrinho({ carrinho, onIncrease, onDecrease, onRemove }) {
    const total = carrinho.reduce((soma, item) => soma + item.price * item.quantidade, 0)
  return (
    <div className="carrinho">
      <h2>Carrinho</h2>

      {carrinho.length === 0 && <p>Nenhum item.</p>}

      {carrinho.map((item) => (
        <div key={item.id} className="item-carrinho">
          <span>{item.name}</span>
          <span>Qtd:{item.quantidade}</span>

          <button onClick={() => onDecrease(item.id)}>-</button>
          <button onClick={() => onIncrease(item.id)}>+</button>
          <button onClick={() => onRemove(item.id)}>Remover</button>
        </div>
      ))}
          
          <h3>Total: R$ {total.toFixed(2)}</h3>
    </div>
  );
}
