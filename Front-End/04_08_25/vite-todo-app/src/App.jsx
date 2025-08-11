import { useState } from 'react'
import './App.css'

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState('');
  const [editandoId, setEditandoId] = useState(null);
  const [textoEditado, setTextoEditado] = useState('');

  const adicionarTarefa = () => {
    if (input.trim() === '') return;
    setTarefas([...tarefas, { id: Date.now(), texto: input, concluida: false }]);
    setInput('');
  };

  const alternarConcluida = (id) => {
    setTarefas(
      tarefas.map(tarefa =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  };

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
  };

  const iniciarEdicao = (id, textoAtual) => {
    setEditandoId(id);
    setTextoEditado(textoAtual);
  };

  const salvarEdicao = (id) => {
    setTarefas(
      tarefas.map(tarefa =>
        tarefa.id === id ? { ...tarefa, texto: textoEditado } : tarefa
      )
    );
    setEditandoId(null);
    setTextoEditado('');
  };

  return (
    <div style={{ maxWidth: 500, margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Lista de Tarefas</h1>

      <div style={{ display: 'flex', marginBottom: 20 }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nova tarefa"
          style={{ flex: 1, padding: '8px' }}
          onKeyDown={(e) => { if (e.key === 'Enter') adicionarTarefa(); }}
        />
        <button onClick={adicionarTarefa} style={{ padding: '8px 12px', marginLeft: 8 }}>
          Adicionar
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tarefas.map(tarefa => (
          <li
            key={tarefa.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: 8,
            }}
          >
            <input
              type="checkbox"
              checked={tarefa.concluida}
              onChange={() => alternarConcluida(tarefa.id)}
              style={{ marginRight: 8 }}
            />

            {editandoId === tarefa.id ? (
              <input
                type="text"
                value={textoEditado}
                onChange={(e) => setTextoEditado(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') salvarEdicao(tarefa.id); }}
                style={{
                  flex: 1,
                  padding: '4px',
                  textDecoration: tarefa.concluida ? 'line-through' : 'none',
                  color: tarefa.concluida ? 'gray' : 'black'
                }}
              />
            ) : (
              <span
                style={{
                  flex: 1,
                  textDecoration: tarefa.concluida ? 'line-through' : 'none',
                  color: tarefa.concluida ? 'gray' : 'black'
                }}
              >
                {tarefa.texto} {tarefa.concluida && <strong>(Concluído)</strong>}
              </span>
            )}

            {editandoId === tarefa.id ? (
              <button onClick={() => salvarEdicao(tarefa.id)} style={{ marginLeft: 8 }}>
                💾
              </button>
            ) : (
              <button onClick={() => iniciarEdicao(tarefa.id, tarefa.texto)} style={{ marginLeft: 8 }}>
                ✏️
              </button>
            )}

            <button onClick={() => removerTarefa(tarefa.id)} style={{ marginLeft: 8 }}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;