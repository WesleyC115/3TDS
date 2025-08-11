import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [prioridade, setPrioridade] = useState("Média");
  const [editandoId, setEditandoId] = useState(null);
  const [textoEditado, setTextoEditado] = useState("");
  const [filtro, setFiltro] = useState("todas");
  const [ordenacao, setOrdenacao] = useState("criacao");
  const [erro, setErro] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // Atualiza a classe dark no body para aplicar modo escuro na tela toda
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  function adicionarTarefa() {
    if (novaTarefa.trim() === "") {
      setErro("A tarefa não pode estar vazia!");
      return;
    }
    setErro("");
    setTarefas([
      ...tarefas,
      { id: Date.now(), texto: novaTarefa.trim(), concluida: false, prioridade }
    ]);
    setNovaTarefa("");
    setPrioridade("Média");
  }

  function toggleConcluida(id) {
    setTarefas(
      tarefas.map((t) =>
        t.id === id ? { ...t, concluida: !t.concluida } : t
      )
    );
  }

  function removerTarefa(id) {
    setTarefas(tarefas.filter((t) => t.id !== id));
  }

  function salvarEdicao(id) {
    if (textoEditado.trim() === "") {
      setErro("O texto da tarefa não pode estar vazio.");
      return;
    }
    setErro("");
    setTarefas(
      tarefas.map((t) =>
        t.id === id ? { ...t, texto: textoEditado.trim() } : t
      )
    );
    setEditandoId(null);
    setTextoEditado("");
  }

  function cancelarEdicao() {
    setEditandoId(null);
    setTextoEditado("");
    setErro("");
  }

  const prioridadesOrdem = { Alta: 1, Média: 2, Baixa: 3 };

  const tarefasFiltradas = tarefas
    .filter((t) => {
      if (filtro === "concluidas") return t.concluida;
      if (filtro === "pendentes") return !t.concluida;
      return true;
    })
    .sort((a, b) => {
      if (ordenacao === "alfabetica") {
        return a.texto.localeCompare(b.texto);
      } else if (ordenacao === "prioridade") {
        return prioridadesOrdem[a.prioridade] - prioridadesOrdem[b.prioridade];
      }
      return a.id - b.id;
    });

  const total = tarefas.length;
  const concluidas = tarefas.filter((t) => t.concluida).length;
  const pendentes = total - concluidas;

  return (
    <>
      <button
        className="btn-modo-escuro"
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Alternar modo claro e escuro"
        title="Alternar modo claro e escuro"
      >
        {darkMode ? "Modo Claro" : "Modo Escuro"}
      </button>

      <div className="container">
        <h1>Lista de Tarefas</h1>

        <div className="input-group">
          <input
            type="text"
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
            placeholder="Digite uma nova tarefa"
            onKeyDown={(e) => e.key === "Enter" && adicionarTarefa()}
          />
          <select
            value={prioridade}
            onChange={(e) => setPrioridade(e.target.value)}
            aria-label="Selecionar prioridade"
          >
            <option>Alta</option>
            <option>Média</option>
            <option>Baixa</option>
          </select>
          <button onClick={adicionarTarefa}>Adicionar</button>
        </div>

        {erro && <p className="error">{erro}</p>}

        <div className="filtros" role="group" aria-label="Filtros de tarefas">
          <button onClick={() => setFiltro("todas")}>Todas</button>
          <button onClick={() => setFiltro("concluidas")}>Concluídas</button>
          <button onClick={() => setFiltro("pendentes")}>Pendentes</button>
        </div>

        <div className="ordenacao" role="group" aria-label="Ordenação de tarefas">
          <button onClick={() => setOrdenacao("criacao")}>Por criação</button>
          <button onClick={() => setOrdenacao("alfabetica")}>Alfabética</button>
          <button onClick={() => setOrdenacao("prioridade")}>Por prioridade</button>
        </div>

        <ul
          className="lista-tarefas"
          aria-live="polite"
          aria-relevant="additions removals"
        >
          {tarefasFiltradas.map((tarefa) => (
            <li key={tarefa.id} className="tarefa">
              <input
                type="checkbox"
                checked={tarefa.concluida}
                onChange={() => toggleConcluida(tarefa.id)}
                aria-label={`Marcar tarefa ${tarefa.texto} como concluída`}
              />
              {editandoId === tarefa.id ? (
                <>
                  <input
                    type="text"
                    className="input-edicao"
                    value={textoEditado}
                    onChange={(e) => setTextoEditado(e.target.value)}
                    aria-label="Editar texto da tarefa"
                  />
                  <button
                    className="btn-salvar"
                    onClick={() => salvarEdicao(tarefa.id)}
                  >
                    Salvar
                  </button>
                  <button className="btn-cancelar" onClick={cancelarEdicao}>
                    Cancelar
                  </button>
                </>
              ) : (
                <>
                  <span
                    className={
                      "texto-tarefa " + (tarefa.concluida ? "concluida" : "")
                    }
                  >
                    {tarefa.texto}{" "}
                    <span
                      className={"prioridade " + tarefa.prioridade}
                      aria-label={`Prioridade ${tarefa.prioridade}`}
                      title={`Prioridade ${tarefa.prioridade}`}
                    >
                      {tarefa.prioridade}
                    </span>
                  </span>
                  {tarefa.concluida && (
                    <span
                      className="status-concluida"
                      aria-live="polite"
                      aria-atomic="true"
                    >
                      Concluída
                    </span>
                  )}
                  <button
                    className="btn-editar"
                    onClick={() => {
                      setEditandoId(tarefa.id);
                      setTextoEditado(tarefa.texto);
                    }}
                    aria-label={`Editar tarefa ${tarefa.texto}`}
                  >
                    Editar
                  </button>
                  <button
                    className="btn-remover"
                    onClick={() => removerTarefa(tarefa.id)}
                    aria-label={`Remover tarefa ${tarefa.texto}`}
                  >
                    X
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>

        <p className="contador">
          Total: {total} | Concluídas: {concluidas} | Pendentes: {pendentes}
        </p>
      </div>
    </>
  );
}
