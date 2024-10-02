// pages/api/nasa.ts
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  url: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | { error: string }>) {
  try {
    // Chave da API da NASA fornecida por você
    const apiKey = "CWxTv9SyAH0kwCDGISc1o94vrV0fPnhHSZPG5jHa";

    // Fazendo a requisição para a API da NASA e obtendo apenas a imagem do dia
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);

    // Verifica se a requisição foi bem-sucedida
    if (!response.ok) {
      throw new Error("Erro ao buscar a imagem da NASA");
    }

    const data = await response.json();

    // Retorna apenas a URL da imagem
    res.status(200).json({ url: data.url });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}
