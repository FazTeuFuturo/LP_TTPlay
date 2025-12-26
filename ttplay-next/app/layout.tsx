import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "TTPlay - A Plataforma Completa para Gestão de Tênis de Mesa",
    template: "%s | TTPlay",
  },
  description:
    "Transforme a gestão dos seus campeonatos de tênis de mesa. Automatize inscrições, gere chaves, acompanhe rankings e conecte toda a comunidade em uma plataforma profissional.",
  keywords: [
    "tênis de mesa",
    "ping pong",
    "torneio tênis de mesa",
    "gestão de torneios",
    "software tênis de mesa",
    "campeonato ping pong",
    "ranking tênis de mesa",
    "organizar torneio",
    "chaveamento automático",
    "clube tênis de mesa",
    "gestão de clubes",
    "mensalidades",
  ],
  authors: [{ name: "TTPlay" }],
  creator: "TTPlay",
  metadataBase: new URL("https://ttplay.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://ttplay.com.br",
    siteName: "TTPlay",
    title: "TTPlay - Gestão Completa para Tênis de Mesa",
    description:
      "Plataforma profissional para gestão de torneios, clubes e rankings de tênis de mesa. Automatize inscrições, gere chaves e conecte toda a comunidade.",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "TTPlay - Plataforma de Tênis de Mesa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TTPlay - Gestão Completa para Tênis de Mesa",
    description:
      "Plataforma profissional para gestão de torneios, clubes e rankings de tênis de mesa.",
    images: ["/preview.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`${inter.variable}`}>{children}</body>
    </html>
  );
}
