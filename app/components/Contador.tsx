"use client";

import { useState } from "react";

export default function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p className="valor">Valor: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Aumentar</button>
      <button onClick={() => setContador(Math.max(0, contador - 1))}>
        Diminuir
      </button>
      <button onClick={() => setContador(0)}>Zerar</button>
    </div>
  );
}
