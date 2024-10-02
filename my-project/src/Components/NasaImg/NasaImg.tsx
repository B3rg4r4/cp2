// components/NasaImage.tsx
import { useEffect, useState } from "react";

export default function NasaImage() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    async function fetchImage() {
      try {
        const res = await fetch("/api/nasa");
        const data = await res.json();
        setImageUrl(data.url);
      } catch (error) {
        console.error("Erro ao buscar a imagem:", error);
      }
    }

    fetchImage();
  }, []);

  if (!imageUrl) {
    return <div>Carregando imagem...</div>;
  }

  return (
    <div className="flex justify-center items-center">
      <img src={imageUrl} alt="NASA Astronomy Picture of the Day" className="max-w-full h-auto" />
    </div>
  );
}
