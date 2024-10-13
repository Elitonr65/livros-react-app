import React from 'react';
import LivroLista from './LivroLista';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LivroDados from './LivroDados';

const App: React.FC = () => {
  return (
    <Router>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark mb-4'>
        <div className='container-fluid'>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link className='nav-link text-white' to={'/'}>Catálogo</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link text-white' to="/dados">Novo</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<LivroLista />} />
        <Route path='/dados' element={<LivroDados />} />
      </Routes>

    </Router>


  );
};

export default App;
