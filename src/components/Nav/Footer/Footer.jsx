import React from 'react';
import './Footer.css';
import iconFacebook from '/public/assets/iconfacebook.png';
import iconInstagram from '/public/assets/iconinstagram.png';
import iconX from '/public/assets/iconx.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Loja de Bikes. Todos os direitos reservados.</p>
        <div className="footer-social">
          <a href="#" aria-label="Facebook">
            <img src={iconFacebook} alt="Facebook" />
          </a>
          <a href="#" aria-label="Twitter">
            <img src={iconX} alt="Twitter" />
          </a>
          <a href="#" aria-label="Instagram">
            <img src={iconInstagram} alt="Instagram" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
