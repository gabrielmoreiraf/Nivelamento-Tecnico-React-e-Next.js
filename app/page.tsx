"use client";

import { useState } from "react";
import Link from "next/link";
import Contador from "./components/Contador";
import ListaTarefas from "./components/ListaTarefas";

export default function Home() {
  const [tarefas, setTarefas] = useState([
    { id: 1, nome: "Estudar Next.js" },
    { id: 2, nome: "Fazer exercícios" },
    { id: 3, nome: "Ler documentação" },
  ]);
  const [novaTarefa, setNovaTarefa] = useState("");

  function adicionarTarefa() {
    if (!novaTarefa.trim()) return;

    const nova = {
      id: tarefas.length + 1,
      nome: novaTarefa,
    };

    setTarefas([...tarefas, nova]);
    setNovaTarefa("");
  }

  return (
    <main>
      <div className="container">
        <h1>Nivelamento Técnico: React e Next.js</h1>
        <nav className="nav-links">
          <div>
            <Link className="box-nav" href="/">
              Home
            </Link>
            <Link className="box-nav" href="/sobre">
              Sobre
            </Link>
          </div>
        </nav>

        <Contador />

        <ListaTarefas
          tarefas={tarefas}
          novaTarefa={novaTarefa}
          onChangeNovaTarefa={setNovaTarefa}
          onAdicionar={adicionarTarefa}
        />
      </div>
    </main>
  );
}
