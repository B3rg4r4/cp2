import Head from "next/head";

export default function Idea2() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Worlds in Collision - Ideia 2</title>
        <meta
          name="description"
          content="Explorando a segunda ideia de Immanuel Velikovsky no projeto Worlds in Collision."
        />
      </Head>

      <main className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Segunda Ideia de Immanuel Velikovsky
        </h1>

        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Deslocamento dos Pólos
          </h2>
          <p className="text-gray-700 mb-4">
            Velikovsky propôs que o deslocamento dos pólos da Terra foi causado
            por eventos astronômicos, como a aproximação de grandes corpos
            celestes. Este fenômeno teria resultado em grandes mudanças no clima
            e no relevo da Terra, influenciando o desenvolvimento das
            civilizações antigas.
          </p>
          <p className="text-gray-700 mb-4">
            A ideia sugere que catástrofes naturais e fenômenos descritos em
            antigos textos religiosos podem ter uma explicação astronômica e
            geológica.
          </p>
        </section>

        {/* Ilustração */}
        <section className="mt-10 text-center">
          <img
            src="https://via.placeholder.com/600x300"
            alt="Deslocamento dos Pólos da Terra"
            className="mx-auto rounded-lg shadow-md"
          />
          <figcaption className="mt-2 text-sm text-gray-600">
            Deslocamento dos Pólos da Terra.
          </figcaption>
        </section>
      </main>
    </div>
  );
}
