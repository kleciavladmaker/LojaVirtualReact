import React from 'react'
import logo from './logo.png'

import './Header.css'

export default function Header() {
  return (
    <header data-testid="header">
      <img src={logo} alt="ogo do site" />
      <h1>Loja Virtual</h1>
    </header>
  )
}