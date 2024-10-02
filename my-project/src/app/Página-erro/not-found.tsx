import Image from "next/image";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Página Não Encontrada</h1>
      <Image src="/error-image.jpg" alt="Error" width={500} height={500} />
    </div>
  );
}
