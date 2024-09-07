import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import logoX from '/public/assets/logo.png';

const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <img src={logoX} alt="" className='logo'/>
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/produtos">Produtos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/sobre">Sobre</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contato">Contato</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
