import { Link } from 'react-router-dom';
import './Home.css';
import bikeImage from '/public/assets/bike02.png';

const Home = () => {
    return (
      <div className="home-container">
        <header className="home-header">
        </header>
        <h1 className='title'>
          RIDE FOR <br />
          YOUR PASSION
        </h1>
        <section className="home-content">
        <img src={bikeImage} alt="bicicleta" className="img-bike02-banner" />
        </section>
      </div>
    )
  }

export default Home;
