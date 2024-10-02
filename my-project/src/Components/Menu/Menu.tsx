import Link from 'next/link';

export default function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/pagina1">
            <a>Primeira Ideia</a>
          </Link>
        </li>
        <li>
          <Link href="/pagina2">
            <a>Segunda Ideia</a>
          </Link>
        </li>
        <li>
          <Link href="/pagina3">
            <a>Terceira Ideia</a>
          </Link>
        </li>
        <li>
          <Link href="/calculo">
            <a>Cálculo</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}