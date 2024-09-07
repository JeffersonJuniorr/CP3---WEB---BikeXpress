import './Contato.css';

function Contatos() {
  return (
    <div className="contatos-container">
      <h1>Fale Conosco</h1>
      
      <div className="contact-info">
        <p><strong>Endereço:</strong> Rua piasdh, 123 - São Paulo, SP</p>
        <p><strong>Telefone:</strong> (11) 91234-5678</p>
        <p><strong>E-mail:</strong> contato@bikexpress.com</p>
      </div>

      <div className="contact-form">
        <h2>Envie uma mensagem</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensagem:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Contatos;