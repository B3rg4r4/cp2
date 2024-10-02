// app/api/nasa/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = "CWxTv9SyAH0kwCDGISc1o94vrV0fPnhHSZPG5jHa";
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Erro ao buscar a imagem da NASA");
    }
    const data = await response.json();
    return NextResponse.json({ url: data.url });
  } catch (error) {
    console.error("Erro:", error); // Adicionando log de erro
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: "Unknown error" }, { status: 500 });
    }
  }
}
