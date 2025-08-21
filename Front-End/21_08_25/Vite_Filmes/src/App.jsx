import React, { useState, useEffect } from 'react';
import { fetchMoviesBySearchTerm} from './api';
import './index.css';


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
}

//O useEffect é um Hook que executa efeitos colaterais.
//Neste caso, ele faz a busca de filmes sempre que o 'searchTerm mu
useEffect(() => {
  const getMovies = async () => {
    try {
      const movieResults = await fetchMoviesBySearchTerm(searchTerm);
      setMovies(movieResults);
    } catch (err) {
      setError("Não foi possivel carregar os filmes. Verifique a conexão com a API");
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  if (searchTerm) {
    const timer = setTimeout(() => {
      getMovies();
    }, 500);
    
    return () => clearTimeout(timer);
  } else {
    setMovies([]);
  }
}, [searchTerm]);

return (
  <div className='container'>
    <h1>Buscador de Filmes</h1>
    <input type="text"
    placeholder="Digite o nome de um filme"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className='search-input' />

    {loading && }
  
  
  
  </div>
)

export default App
