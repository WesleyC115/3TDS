import { useState, useEffect } from 'react';
import './App.css';  
import { evaluate } from 'mathjs';  

export default function App() {
  const [expressao, setExpressao] = useState(''); 
  const [resultado, setResultado] = useState(null); 
  const [modoEscuro, setModoEscuro] = useState(false); 

  function adicionarEntrada(value) {
    setExpressao(prevExpressao => prevExpressao + value);
  }

  function calcularResultado() {
    try {

      const res = evaluate(expressao);
      setResultado(res);
      setExpressao(res.toString()); 
    } catch (error) {
      setResultado('Erro');
    }
  }

  function apagarUltimo() {
    setExpressao(prevExpressao => prevExpressao.slice(0, -1));
  }

  function alternarModo() {
    setModoEscuro(prevModo => !prevModo); 
  }

  useEffect(() => {
    function handleKeydown(event) {
      const key = event.key;

      if ('0123456789'.includes(key)) {
        adicionarEntrada(key);
      } else if ('+-*/'.includes(key)) {
        adicionarEntrada(key);
      } else if (key === 'Enter') {
        calcularResultado();
      } else if (key === 'Backspace') {
        apagarUltimo();
      }
    }

    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [expressao]); 

  return (
    <div className={`calculadora ${modoEscuro ? 'escuro' : 'claro'}`}>
      <h1>Calculadora Simples</h1>

      <div className="input-container">
        <input
          type="text"
          value={expressao}
          readOnly
          className="input-expressao"
        />
      </div>

      <div>
        <button onClick={() => adicionarEntrada('7')}>7</button>
        <button onClick={() => adicionarEntrada('8')}>8</button>
        <button onClick={() => adicionarEntrada('9')}>9</button>
        <button onClick={() => adicionarEntrada('/')}>/</button>
      </div>

      <div>
        <button onClick={() => adicionarEntrada('4')}>4</button>
        <button onClick={() => adicionarEntrada('5')}>5</button>
        <button onClick={() => adicionarEntrada('6')}>6</button>
        <button onClick={() => adicionarEntrada('*')}>*</button>
      </div>

      <div>
        <button onClick={() => adicionarEntrada('1')}>1</button>
        <button onClick={() => adicionarEntrada('2')}>2</button>
        <button onClick={() => adicionarEntrada('3')}>3</button>
        <button onClick={() => adicionarEntrada('-')}>-</button>
      </div>

      <div>
        <button onClick={() => adicionarEntrada('0')}>0</button>
        <button onClick={() => adicionarEntrada('.')}>.</button>
        <button onClick={calcularResultado}>=</button>
        <button onClick={() => adicionarEntrada('+')}>+</button>
      </div>

      <div>
        <button onClick={apagarUltimo}>C</button>
      </div>

      <button onClick={alternarModo}>
        {modoEscuro ? 'Modo Claro' : 'Modo Escuro'}
      </button>

      {resultado !== null && (
        <h2>Resultado: {resultado}</h2>
      )}
    </div>
  );
}
