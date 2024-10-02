import type { Metadata } from "next";
import "./globals.css";

import Menu from "@/Components/Menu/Menu";
import Cabecalho from "@/Components/Cabecalho/Cabecalho";
import Rodape from "@/Components/Rodape/Rodape";

export const metadata: Metadata = {
  title: "Checkpoint2 - Segundo semestre",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Cabecalho />
        <Menu />
        {children}
        <Rodape />
      </body>
    </html>
  );
}
