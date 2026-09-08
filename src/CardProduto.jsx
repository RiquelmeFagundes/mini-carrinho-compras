import React from 'react';
import Tooltip from './Tooltip';

export default function CardProduto({produto, onAdd}) {

  return (
      <div className="card-produto">
          <h3>{produto.name}</h3>
    </div>
  )
}
