import Head from "next/head";

export default function Idea1() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Worlds in Collision - Ideia 1</title>
        <meta
          name="description"
          content="Explorando a primeira ideia de Immanuel Velikovsky no projeto Worlds in Collision."
        />
      </Head>

      <main className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Primeira Ideia de Immanuel Velikovsky
        </h1>

        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Interação Planetária</h2>
          <p className="text-gray-700 mb-4">
            Velikovsky sugeriu que o planeta Vênus era um cometa expulso de
            Júpiter, que se aproximou da Terra e causou catástrofes globais. Ele
            acreditava que isso afetou a órbita da Terra e resultou em mudanças
            climáticas e eventos cataclísmicos, que foram registrados nas
            mitologias e textos antigos.
          </p>
          <p className="text-gray-700 mb-4">
            Esta ideia revolucionou a maneira como os cientistas e historiadores
            olham para o desenvolvimento da Terra e as suas interações com
            outros corpos celestes.
          </p>
        </section>

        {/* Ilustração */}
        <section className="mt-10 text-center">
          <img
            src="https://via.placeholder.com/600x300"
            alt="Representação da interação entre a Terra e Vênus"
            className="mx-auto rounded-lg shadow-md"
          />
          <figcaption className="mt-2 text-sm text-gray-600">
            Representação da interação entre a Terra e Vênus.
          </figcaption>
        </section>
      </main>
    </div>
  );
}
