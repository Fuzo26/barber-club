import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Barber Club | Barbearia Premium em Santos",
  description:
    "Seu estilo em boas mãos. Cortes masculinos modernos, barboterapia tradicional e atendimento exclusivo no Centro de Santos/SP.",
  keywords: ["barbearia", "Santos", "corte masculino", "barba", "Barber Club"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body
        className="min-h-full flex flex-col bg-[#0a0a0a] text-zinc-100"
        style={{ backgroundColor: "#0a0a0a", color: "#ededed" }}
      >
        {children}
      </body>
    </html>
  );
}

