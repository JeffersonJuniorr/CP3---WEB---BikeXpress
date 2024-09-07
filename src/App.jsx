import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home/Home';
import Produtos from './routes/Produtos/Produtos';
import Sobre from './routes/Sobre';
import Contato from './routes/Contato';
import Nav from './components/Nav/Nav/Nav';
import Footer from './components/Nav/Footer/Footer';
import Error from './routes/Error';

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
