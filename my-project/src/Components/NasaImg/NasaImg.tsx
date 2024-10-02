// src/Components/NasaImg/NasaImg.tsx
"use client"; // Adicione esta linha

import { useEffect, useState } from "react";

export default function NasaImg() {
  const [mediaUrl, setMediaUrl] = useState<string | null>(null);
  const [isVideo, setIsVideo] = useState<boolean>(false);

  useEffect(() => {
    async function fetchImage() {
      try {
        const res = await fetch("/api/nasa"); // Altere o caminho conforme necessário
        const data = await res.json();

        if (data.url) {
          setMediaUrl(data.url);
          setIsVideo(data.url.includes("youtube.com"));
        } else {
          console.error("Nenhuma URL de imagem ou vídeo retornada");
        }
      } catch (error) {
        console.error("Erro ao buscar a imagem:", error);
      }
    }

    fetchImage();
  }, []);

  if (!mediaUrl) {
    return <div>Carregando imagem...</div>;
  }

  return (
    <div className="flex justify-center items-center">
      {isVideo ? (
        <iframe
          width="560"
          height="315"
          src={mediaUrl}
          title="Vídeo da NASA"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
      ) : (
        <img src={mediaUrl} alt="NASA Astronomy Picture of the Day" className="max-w-full h-auto" />
      )}
    </div>
  );
}
