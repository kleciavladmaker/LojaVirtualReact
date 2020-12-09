import React from 'react';
import './CardCategoria.css';
import android from './android.png';

export default function CardCategoria({nome='Produtos Android', img= android}) {
  return (
    <div>
      <h6>{nome}</h6>
      <img src={img} alt="" />
    </div>
  )
}