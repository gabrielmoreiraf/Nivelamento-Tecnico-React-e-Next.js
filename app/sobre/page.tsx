import Link from "next/link";

export default function Sobre() {
  return (
    <main>
      <div className="container">
        <h1>Sobre</h1>
        <p>
          Me Chamo Gabriel, e Objetivo deste nivelamento foi, dominar os
          conceitos fundamentais do React moderno e entender as particularidades
          do Next.js 13/14 (Server vs Client Components).
        </p>
        <div className="nav-links">
          <Link className="box-nav" href="/">
            Voltar para Home
          </Link>
        </div>
      </div>
    </main>
  );
}
