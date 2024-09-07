import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home/Home.jsx';
import Produtos from './routes/Produtos/Produtos.jsx';
import Sobre from './routes/Sobre/Sobre.jsx';
import Nav from './components/Nav/Nav/Nav.jsx';
import Footer from './components/Nav/Footer/Footer.jsx';
import Error from './routes/Error.jsx';
import Contato from './routes/Contato/Contato.jsx';

const App = () => {
  return (
    <div>
      <Nav /> {/* Barra de navegação */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer /> {/* Rodapé */}
    </div>
  )
}

export default App;
