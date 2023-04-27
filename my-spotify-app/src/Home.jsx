import React from 'react';
import { Link } from 'react-router-dom';

import './assets/Home.css';

function Home() {
  return (
    <div className="Home">
      <h1>Bienvenido a tu app de Spotify</h1>
 
      <nav>
        <ul>
          <li>
            <Link to="/search">Buscar canciones</Link>
          </li>
          <li>
            <Link to="/profile">Mi perfil</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
