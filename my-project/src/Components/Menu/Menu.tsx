import Link from "next/link";

export default function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/pagina1">Primeira Ideia</Link>
        </li>
        <li>
          <Link href="/pagina2">Segunda Ideia</Link>
        </li>
        <li>
          <Link href="/pagina3">Terceira Ideia</Link>
        </li>
        <li>
          <Link href="/pagina4">Cálculo Proposto</Link>
        </li>
      </ul>
    </nav>
  );
}
