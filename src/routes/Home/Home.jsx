import { Link } from 'react-router-dom';
import './Home.css';
import bikeImage from '/public/assets/bike01.png';

const Home = () => {
    return (
      <div className="home-container">
        <header className="home-header">
          <h1 className="home-title">BikeXpress</h1>
        </header>
        <section className="home-content">
        <img src={bikeImage} alt="bicicleta" className="img-bike01" />
        </section>
      </div>
    );
  };

export default Home;
