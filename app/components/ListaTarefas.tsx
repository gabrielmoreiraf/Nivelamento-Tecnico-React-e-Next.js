type ListaTarefasProps = {
  tarefas: { id: number; nome: string }[];
  novaTarefa: string;
  onChangeNovaTarefa: (valor: string) => void;
  onAdicionar: () => void;
};

export default function ListaTarefas({
  tarefas,
  novaTarefa,
  onChangeNovaTarefa,
  onAdicionar,
}: ListaTarefasProps) {
  return (
    <div className="form-linha">
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>{tarefa.nome}</li>
        ))}
      </ul>

      <input
        value={novaTarefa}
        onChange={(e) => onChangeNovaTarefa(e.target.value)}
        type="text"
      />
      <button className="card" onClick={onAdicionar}>
        Adicionar Tarefa
      </button>
    </div>
  );
}
