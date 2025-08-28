// src/App.jsx

import React, { useState, useEffect } from 'react';
import { fetchMoviesBySearchTerm } from './api';
import './index.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // O useEffect é um Hook que executa efeitos colaterais.
  // Neste caso, ele faz a busca de filmes sempre que o 'searchTerm' muda.
  useEffect(() => {
    // Função assíncrona para buscar os filmes
    const getMovies = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const movieResults = await fetchMoviesBySearchTerm(searchTerm);
        setMovies(movieResults);
      } catch (err) {
        setError("Não foi possível carregar os filmes. Verifique sua conexão e chave de API.");
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    // A busca só é feita se houver um termo de busca
    if (searchTerm) {
      // Usamos um pequeno atraso para evitar muitas requisições
      const timer = setTimeout(() => {
        getMovies();
      }, 500); // 500 milissegundos
      
      // Retornar uma função de limpeza para cancelar o timer
      // caso o termo de busca mude rapidamente.
      return () => clearTimeout(timer);
    } else {
      setMovies([]); // Limpa a lista se a busca estiver vazia
    }
  }, [searchTerm]); // Array de dependências: a função é re-executada quando 'searchTerm' muda.

  return (
    <div className="container">
      <h1>Buscador de Filmes</h1>
      <input
        type="text"
        placeholder="Digite o nome de um filme..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {loading && <p>Carregando filmes...</p>}
      {error && <p className="error">{error}</p>}
      
      {!loading && !error && movies.length === 0 && searchTerm !== '' && (
        <p>Nenhum filme encontrado. Tente novamente.</p>
      )}

      {!loading && movies.length > 0 && (
        <ul className="movie-list">
          {movies.map((movie) => (
            <li key={movie.id} className="movie-item">
              <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
              <div className="movie-details">
                <h3>{movie.title}</h3>
                <p>Nota: {movie.vote_average}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default App
