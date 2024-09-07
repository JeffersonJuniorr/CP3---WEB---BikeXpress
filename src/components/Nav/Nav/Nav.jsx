import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'; // Importa o arquivo CSS

const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
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
  );
};

export default Nav;
