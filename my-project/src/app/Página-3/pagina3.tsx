import Head from "next/head";

export default function Idea3() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Cabeçalho da página */}
      <Head>
        <title>Worlds in Collision - Ideia 3</title>
        <meta
          name="description"
          content="Explorando a terceira ideia de Immanuel Velikovsky no projeto Worlds in Collision."
        />
      </Head>

      {/* Conteúdo Principal */}
      <main className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Terceira Ideia de Immanuel Velikovsky
        </h1>

        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Impacto dos Corpos Celestes na História
          </h2>
          <p className="text-gray-700 mb-4">
            Immanuel Velikovsky propôs que eventos catastróficos na Terra, como
            grandes inundações, terremotos e mudanças climáticas, foram causados
            por interações com corpos celestes como cometas ou planetas
            próximos. Ele argumentou que eventos registrados em antigos textos e
            mitologias podem ser explicados por perturbações gravitacionais e
            eletromagnéticas causadas por aproximações planetárias.
          </p>
          <p className="text-gray-700 mb-4">
            Em sua terceira ideia, Velikovsky defende que a história da
            humanidade precisa ser reinterpretada levando em consideração as
            evidências de grandes perturbações astronômicas, que deixaram marcas
            nos mitos e nas lendas de muitas culturas ao redor do mundo.
          </p>

          <p className="text-gray-700 mb-4">
            Essas mudanças não apenas afetaram a Terra fisicamente, mas também
            influenciaram o desenvolvimento cultural e religioso das
            civilizações antigas, que interpretavam esses fenômenos como
            manifestações divinas ou intervenções dos deuses.
          </p>
        </section>

        {/* Ilustração */}
        <section className="mt-10 text-center">
          <img
            src="https://via.placeholder.com/600x300"
            alt="Representação do impacto dos corpos celestes na Terra"
            className="mx-auto rounded-lg shadow-md"
          />
          <figcaption className="mt-2 text-sm text-gray-600">
            Representação ilustrativa do impacto dos corpos celestes na Terra.
          </figcaption>
        </section>
      </main>
    </div>
  );
}
