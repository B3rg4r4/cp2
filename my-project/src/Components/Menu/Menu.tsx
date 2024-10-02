import Link from "next/link";

export default function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="../../app/pagina/pagina1/page.tsx">Primeira Ideia</Link>
        </li>
        <li>
            <Link href="../../app/pagina/pagina2/page.tsx">Segunda Ideia</Link>
        </li>
        <li>
            <Link href="../../app/pagina/pagina3/page.tsx">Terceira Ideia</Link>
        </li>
        <li>
            <Link href="../../app/pagina/pagina4/page.tsx">Calculo</Link>
        </li>
      </ul>
    </nav>
  );
}
