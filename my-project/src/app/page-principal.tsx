import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Worlds in Collision - Página Inicial</title>
        <meta
          name="description"
          content="Projeto explorando as ideias de Immanuel Velikovsky."
        />
      </Head>

      <main className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Worlds in Collision
        </h1>

        <p className="text-lg text-center text-gray-700 mb-8">
          Este projeto explora as ideias de Immanuel Velikovsky, focando nos
          conceitos apresentados em seu livro "Worlds in Collision".
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/idea1">
            <a className="block p-6 bg-white shadow-md rounded-lg hover:bg-gray-50">
              <h2 className="text-2xl font-semibold mb-2">Ideia 1</h2>
              <p>Exploração da primeira grande ideia de Velikovsky.</p>
            </a>
          </Link>
          <Link href="/idea2">
            <a className="block p-6 bg-white shadow-md rounded-lg hover:bg-gray-50">
              <h2 className="text-2xl font-semibold mb-2">Ideia 2</h2>
              <p>Exploração da segunda grande ideia de Velikovsky.</p>
            </a>
          </Link>
          <Link href="/idea3">
            <a className="block p-6 bg-white shadow-md rounded-lg hover:bg-gray-50">
              <h2 className="text-2xl font-semibold mb-2">Ideia 3</h2>
              <p>Exploração da terceira grande ideia de Velikovsky.</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
