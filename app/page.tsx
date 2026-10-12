"use client";

import { useState } from "react";

// =======================================================================
// CONFIGURAÇÃO DE DEMONSTRAÇÃO DO WHATSAPP
// Para utilizar em produção, basta substituir o número abaixo pelo número
// real com DDI e DDD (exemplo: "5513999999999").
// =======================================================================
const WHATSAPP_DEMO_NUMBER = "5500000000000";
const WHATSAPP_DISPLAY_NUMBER = "(00) 00000-0000";

function createWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_DEMO_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const defaultHeroMessage =
    "Olá! Gostaria de agendar um horário na Barber Club.";

  const services = [
    {
      id: "corte",
      title: "Corte Masculino",
      price: "R$ 40,00",
      description:
        "Corte personalizado com tesoura e máquina, lavagem especial, alinhamento térmico e finalização com pomada modeladora de alto padrão.",
      duration: "45 min",
      badge: "Mais Procurado",
      image:
        "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=700&q=80",
      message:
        "Olá! Gostaria de agendar um Corte Masculino (R$ 40,00) na Barber Club.",
    },
    {
      id: "barba",
      title: "Barba Tradicional",
      price: "R$ 25,00",
      description:
        "Barboterapia completa com toalha quente aromática, espuma cremosa, navalha esterilizada, óleo hidratante e massagem facial relaxante.",
      duration: "35 min",
      badge: "Clássico",
      image:
        "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=700&q=80",
      message:
        "Olá! Gostaria de agendar uma Barba Tradicional (R$ 25,00) na Barber Club.",
    },
    {
      id: "combo",
      title: "Corte + Barba",
      price: "R$ 55,00",
      description:
        "O combo definitivo para renovar seu visual completo: corte masculino estilizado somado ao ritual tradicional de barboterapia com desconto especial.",
      duration: "75 min",
      badge: "Melhor Custo-Benefício",
      image:
        "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=700&q=80",
      message:
        "Olá! Gostaria de agendar o Combo Corte + Barba (R$ 55,00) na Barber Club.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-[#0a0a0a] text-zinc-100 flex flex-col selection:bg-[#d4af37] selection:text-black"
      style={{ backgroundColor: "#0a0a0a", color: "#ededed" }}
    >
      {/* ================================================================= */}
      {/* 1. CABEÇALHO (HEADER)                                              */}
      {/* ================================================================= */}
      <header className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-zinc-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#d4af37] rounded-lg p-1"
          >
            <div
              className="w-10 h-10 rounded-full border-2 border-[#d4af37] bg-zinc-900 flex items-center justify-center text-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.25)] group-hover:scale-105 transition-transform shrink-0"
              style={{ width: "40px", height: "40px" }}
            >
              {/* Ícone de Tesoura / Barbearia */}
              <svg
                width={20}
                height={20}
                style={{ width: "20px", height: "20px" }}
                className="w-5 h-5 fill-current shrink-0"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 1.41 1.41L22 4.41V3h-3z" />
              </svg>
            </div>
            <div>
              <span className="font-extrabold tracking-[0.2em] text-lg sm:text-xl text-white block leading-tight">
                BARBER <span className="text-[#d4af37]">CLUB</span>
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-400 block">
                Santos / SP
              </span>
            </div>
          </a>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#inicio"
              className="text-sm font-medium text-zinc-300 hover:text-[#d4af37] transition-colors"
            >
              Início
            </a>
            <a
              href="#servicos"
              className="text-sm font-medium text-zinc-300 hover:text-[#d4af37] transition-colors"
            >
              Serviços
            </a>
            <a
              href="#localizacao"
              className="text-sm font-medium text-zinc-300 hover:text-[#d4af37] transition-colors"
            >
              Localização
            </a>
            <a
              href="#horario"
              className="text-sm font-medium text-zinc-300 hover:text-[#d4af37] transition-colors"
            >
              Horário
            </a>
            <a
              href="#contato"
              className="text-sm font-medium text-zinc-300 hover:text-[#d4af37] transition-colors"
            >
              Contato
            </a>
          </nav>

          {/* Botão WhatsApp Desktop */}
          <div className="hidden md:block">
            <a
              href={createWhatsAppLink(defaultHeroMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs uppercase tracking-wider py-2.5 px-4 rounded-full transition-all shadow-lg hover:shadow-emerald-900/40 hover:-translate-y-0.5 border border-emerald-400/30"
            >
              <svg
                width={16}
                height={16}
                style={{ width: "16px", height: "16px" }}
                className="w-4 h-4 fill-current shrink-0"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.42 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.13 7.34C8.95 7.34 8.76 7.34 8.61 7.35C8.42 7.37 8.16 7.44 7.94 7.68C7.72 7.92 7.11 8.49 7.11 9.65C7.11 10.82 7.96 11.94 8.08 12.1C8.2 12.26 9.73 14.61 12.08 15.62C12.64 15.86 13.07 16.01 13.41 16.12C13.97 16.3 14.48 16.27 14.89 16.21C15.34 16.14 16.27 15.64 16.47 15.09C16.66 14.54 16.66 14.07 16.6 13.97C16.55 13.88 16.4 13.82 16.18 13.71C15.96 13.6 14.88 13.07 14.68 12.99C14.47 12.92 14.33 12.88 14.18 13.11C14.03 13.34 13.61 13.82 13.48 13.97C13.36 14.12 13.23 14.14 13.01 14.03C12.79 13.92 12.08 13.69 11.23 12.93C10.57 12.34 10.13 11.61 10.01 11.39C9.89 11.17 10 11.05 10.11 10.94C10.21 10.84 10.33 10.68 10.45 10.54C10.56 10.4 10.6 10.3 10.68 10.14C10.75 9.97 10.71 9.83 10.66 9.72C10.6 9.61 10.18 8.56 10 8.13C9.83 7.7 9.65 7.77 9.52 7.76C9.4 7.75 9.27 7.75 9.13 7.75V7.34Z" />
              </svg>
              <span>Agendar Agora</span>
            </a>
          </div>

          {/* Botão Menu Hambúrguer (Mobile) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800/80 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
            aria-label="Abrir menu de navegação"
          >
            <svg
              width={24}
              height={24}
              style={{ width: "24px", height: "24px" }}
              className="w-6 h-6 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menu Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#121212] border-b border-zinc-800 px-4 pt-3 pb-6 space-y-3 transition-all">
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-zinc-200 hover:text-[#d4af37]"
            >
              Início
            </a>
            <a
              href="#servicos"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-zinc-200 hover:text-[#d4af37]"
            >
              Serviços & Preços
            </a>
            <a
              href="#localizacao"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-zinc-200 hover:text-[#d4af37]"
            >
              Localização
            </a>
            <a
              href="#horario"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-zinc-200 hover:text-[#d4af37]"
            >
              Horário de Funcionamento
            </a>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-zinc-200 hover:text-[#d4af37]"
            >
              Contato
            </a>
            <div className="pt-2">
              <a
                href={createWhatsAppLink(defaultHeroMessage)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-4 rounded-xl text-sm uppercase tracking-wider transition-colors shadow-lg"
              >
                <svg
                  width={20}
                  height={20}
                  style={{ width: "20px", height: "20px" }}
                  className="w-5 h-5 fill-current shrink-0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.42 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.13 7.34C8.95 7.34 8.76 7.34 8.61 7.35C8.42 7.37 8.16 7.44 7.94 7.68C7.72 7.92 7.11 8.49 7.11 9.65C7.11 10.82 7.96 11.94 8.08 12.1C8.2 12.26 9.73 14.61 12.08 15.62C12.64 15.86 13.07 16.01 13.41 16.12C13.97 16.3 14.48 16.27 14.89 16.21C15.34 16.14 16.27 15.64 16.47 15.09C16.66 14.54 16.66 14.07 16.6 13.97C16.55 13.88 16.4 13.82 16.18 13.71C15.96 13.6 14.88 13.07 14.68 12.99C14.47 12.92 14.33 12.88 14.18 13.11C14.03 13.34 13.61 13.82 13.48 13.97C13.36 14.12 13.23 14.14 13.01 14.03C12.79 13.92 12.08 13.69 11.23 12.93C10.57 12.34 10.13 11.61 10.01 11.39C9.89 11.17 10 11.05 10.11 10.94C10.21 10.84 10.33 10.68 10.45 10.54C10.56 10.4 10.6 10.3 10.68 10.14C10.75 9.97 10.71 9.83 10.66 9.72C10.6 9.61 10.18 8.56 10 8.13C9.83 7.7 9.65 7.77 9.52 7.76C9.4 7.75 9.27 7.75 9.13 7.75V7.34Z" />
                </svg>
                Agendar pelo WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ================================================================= */}
      {/* 2. SEÇÃO PRINCIPAL (HERO)                                         */}
      {/* ================================================================= */}
      <section
        id="inicio"
        className="relative pt-12 pb-20 md:py-28 overflow-hidden flex items-center justify-center border-b border-zinc-900"
      >
        {/* Imagem de Fundo com Overlay Gradiente Escuro */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1920&q=80"
            alt="Ambiente elegante da Barber Club"
            className="w-full h-full object-cover object-center opacity-25 filter brightness-50 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge de Destaque */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-[#d4af37]/40 text-[#f3e5ab] text-xs font-semibold uppercase tracking-widest mb-6 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
            Experiência Tradicional & Moderna em Santos
          </div>

          {/* Título Principal */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight uppercase leading-none mb-6">
            Seu estilo em <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa820a]">
              boas mãos
            </span>
          </h1>

          {/* Breve Descrição */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-zinc-300 font-normal leading-relaxed mb-10">
            Mais que um corte de cabelo ou um alinhamento de barba: um espaço
            pensado para o seu conforto, precisão técnica impecável e atendimento
            de padrão superior.
          </p>

          {/* Bloco de Ação: Botão Verde WhatsApp */}
          <div className="flex flex-col items-center gap-3">
            <a
              href={createWhatsAppLink(defaultHeroMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base sm:text-lg px-8 py-4 rounded-xl shadow-[0_10px_30px_rgba(5,150,105,0.4)] hover:shadow-[0_15px_35px_rgba(5,150,105,0.55)] transition-all transform hover:-translate-y-1 active:translate-y-0 border border-emerald-400/30"
            >
              {/* WhatsApp Icon */}
              <svg
                width={24}
                height={24}
                style={{ width: "24px", height: "24px" }}
                className="w-6 h-6 fill-current group-hover:scale-110 transition-transform shrink-0"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.42 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.13 7.34C8.95 7.34 8.76 7.34 8.61 7.35C8.42 7.37 8.16 7.44 7.94 7.68C7.72 7.92 7.11 8.49 7.11 9.65C7.11 10.82 7.96 11.94 8.08 12.1C8.2 12.26 9.73 14.61 12.08 15.62C12.64 15.86 13.07 16.01 13.41 16.12C13.97 16.3 14.48 16.27 14.89 16.21C15.34 16.14 16.27 15.64 16.47 15.09C16.66 14.54 16.66 14.07 16.6 13.97C16.55 13.88 16.4 13.82 16.18 13.71C15.96 13.6 14.88 13.07 14.68 12.99C14.47 12.92 14.33 12.88 14.18 13.11C14.03 13.34 13.61 13.82 13.48 13.97C13.36 14.12 13.23 14.14 13.01 14.03C12.79 13.92 12.08 13.69 11.23 12.93C10.57 12.34 10.13 11.61 10.01 11.39C9.89 11.17 10 11.05 10.11 10.94C10.21 10.84 10.33 10.68 10.45 10.54C10.56 10.4 10.6 10.3 10.68 10.14C10.75 9.97 10.71 9.83 10.66 9.72C10.6 9.61 10.18 8.56 10 8.13C9.83 7.7 9.65 7.77 9.52 7.76C9.4 7.75 9.27 7.75 9.13 7.75V7.34Z" />
              </svg>
              <span>Agendar pelo WhatsApp</span>
            </a>

            {/* Aviso demonstrativo transparente */}
            <span className="text-xs text-zinc-400">
              * Contato demonstrativo: {WHATSAPP_DISPLAY_NUMBER} • Atendimento imediato
            </span>
          </div>

          {/* Diferenciais rápidos (Cards minimalistas) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16 max-w-3xl mx-auto text-left">
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0"
                style={{ width: "40px", height: "40px" }}
              >
                <svg
                  width={20}
                  height={20}
                  style={{ width: "20px", height: "20px" }}
                  className="w-5 h-5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-white uppercase tracking-wider">Pontualidade</p>
                <p className="text-xs text-zinc-400">Atendimento com hora marcada</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0"
                style={{ width: "40px", height: "40px" }}
              >
                <svg
                  width={20}
                  height={20}
                  style={{ width: "20px", height: "20px" }}
                  className="w-5 h-5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-white uppercase tracking-wider">Barboterapia</p>
                <p className="text-xs text-zinc-400">Toalha quente & navalha</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0"
                style={{ width: "40px", height: "40px" }}
              >
                <svg
                  width={20}
                  height={20}
                  style={{ width: "20px", height: "20px" }}
                  className="w-5 h-5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-white uppercase tracking-wider">Ambiente Premium</p>
                <p className="text-xs text-zinc-400">Wi-Fi & Cerveja cortesia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 3. SEÇÃO DE SERVIÇOS E VALORES                                    */}
      {/* ================================================================= */}
      <section id="servicos" className="py-20 md:py-28 bg-[#0d0d0d] border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.25em] block mb-2">
              Nossos Serviços
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
              Tabela de Preços
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4 mb-5" />
            <p className="text-zinc-400 text-sm sm:text-base">
              Valores acessíveis para quem busca padrão superior e atenção aos detalhes.
            </p>
          </div>

          {/* Cards dos Serviços em Grade */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative bg-zinc-950/90 rounded-2xl overflow-hidden border border-zinc-800/80 hover:border-[#d4af37]/60 transition-all duration-300 flex flex-col shadow-xl hover:shadow-[0_10px_30px_rgba(212,175,55,0.12)] hover:-translate-y-1.5"
              >
                {/* Imagem do Serviço */}
                <div className="relative h-56 w-full overflow-hidden bg-zinc-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90 contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

                  {/* Badge de Serviço */}
                  <span className="absolute top-4 right-4 bg-zinc-900/90 text-[#f3e5ab] text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full border border-[#d4af37]/40 shadow-md">
                    {service.badge}
                  </span>

                  {/* Duração */}
                  <span className="absolute bottom-3 left-4 text-xs text-zinc-300 flex items-center gap-1.5 bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-sm border border-zinc-700/50">
                    <svg
                      width={14}
                      height={14}
                      style={{ width: "14px", height: "14px" }}
                      className="w-3.5 h-3.5 text-[#d4af37] shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {service.duration}
                  </span>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline justify-between gap-2 mb-3">
                      <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-[#f3e5ab] transition-colors">
                        {service.title}
                      </h3>
                      <span className="text-2xl font-black text-[#d4af37] shrink-0">
                        {service.price}
                      </span>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Botão de Agendamento do Serviço Específico */}
                  <div className="pt-4 border-t border-zinc-800/80">
                    <a
                      href={createWhatsAppLink(service.message)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-emerald-600 text-zinc-200 hover:text-white font-semibold text-xs uppercase tracking-wider py-3 px-4 rounded-xl border border-zinc-700 hover:border-emerald-500 transition-all duration-200 group-hover:shadow-md"
                    >
                      <svg
                        width={16}
                        height={16}
                        style={{ width: "16px", height: "16px" }}
                        className="w-4 h-4 fill-current text-emerald-400 group-hover:text-white shrink-0"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.42 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.13 7.34C8.95 7.34 8.76 7.34 8.61 7.35C8.42 7.37 8.16 7.44 7.94 7.68C7.72 7.92 7.11 8.49 7.11 9.65C7.11 10.82 7.96 11.94 8.08 12.1C8.2 12.26 9.73 14.61 12.08 15.62C12.64 15.86 13.07 16.01 13.41 16.12C13.97 16.3 14.48 16.27 14.89 16.21C15.34 16.14 16.27 15.64 16.47 15.09C16.66 14.54 16.66 14.07 16.6 13.97C16.55 13.88 16.4 13.82 16.18 13.71C15.96 13.6 14.88 13.07 14.68 12.99C14.47 12.92 14.33 12.88 14.18 13.11C14.03 13.34 13.61 13.82 13.48 13.97C13.36 14.12 13.23 14.14 13.01 14.03C12.79 13.92 12.08 13.69 11.23 12.93C10.57 12.34 10.13 11.61 10.01 11.39C9.89 11.17 10 11.05 10.11 10.94C10.21 10.84 10.33 10.68 10.45 10.54C10.56 10.4 10.6 10.3 10.68 10.14C10.75 9.97 10.71 9.83 10.66 9.72C10.6 9.61 10.18 8.56 10 8.13C9.83 7.7 9.65 7.77 9.52 7.76C9.4 7.75 9.27 7.75 9.13 7.75V7.34Z" />
                      </svg>
                      Agendar este serviço
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 4. LOCALIZAÇÃO E 5. HORÁRIO DE ATENDIMENTO                        */}
      {/* ================================================================= */}
      <section id="localizacao" className="py-20 md:py-28 bg-[#0a0a0a] border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Bloco 4: Localização Fictícia */}
            <div className="bg-zinc-950 p-8 sm:p-10 rounded-2xl border border-zinc-800/80 flex flex-col justify-between shadow-xl">
              <div>
                <div
                  className="w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] mb-6 shadow-[0_0_15px_rgba(212,175,55,0.15)] shrink-0"
                  style={{ width: "48px", height: "48px" }}
                >
                  <svg
                    width={24}
                    height={24}
                    style={{ width: "24px", height: "24px" }}
                    className="w-6 h-6 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>

                <span className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.2em] block mb-2">
                  Onde Estamos
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase mb-4">
                  Localização Privilegiada
                </h3>

                {/* Endereço Requisitado */}
                <div className="bg-zinc-900/90 p-5 rounded-xl border border-zinc-800 mb-6">
                  <p className="text-lg font-bold text-white mb-1">
                    Rua das Palmeiras, 123
                  </p>
                  <p className="text-sm text-zinc-300">
                    Centro — Santos / SP
                  </p>
                  <p className="text-xs text-[#d4af37] mt-2 font-medium">
                    (Endereço fictício para demonstração comercial)
                  </p>
                </div>

                <ul className="space-y-3 text-sm text-zinc-400 mb-8">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] shrink-0" />
                    Localização central de fácil acesso no coração de Santos.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] shrink-0" />
                    Estacionamento conveniado e ponto de ônibus a poucos metros.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] shrink-0" />
                    Espaço reservado, climatizado e totalmente acessível.
                  </li>
                </ul>
              </div>

              {/* Botão Como Chegar */}
              <a
                href="https://maps.google.com/?q=Centro+Santos+SP"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-xs uppercase tracking-wider border border-zinc-700 hover:border-[#d4af37]/50 transition-colors"
              >
                <svg
                  width={16}
                  height={16}
                  style={{ width: "16px", height: "16px" }}
                  className="w-4 h-4 text-[#d4af37] shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Ver mapa de acesso (Demonstração)
              </a>
            </div>

            {/* Bloco 5: Horário Fictício */}
            <div id="horario" className="bg-zinc-950 p-8 sm:p-10 rounded-2xl border border-zinc-800/80 flex flex-col justify-between shadow-xl">
              <div>
                <div
                  className="w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] mb-6 shadow-[0_0_15px_rgba(212,175,55,0.15)] shrink-0"
                  style={{ width: "48px", height: "48px" }}
                >
                  <svg
                    width={24}
                    height={24}
                    style={{ width: "24px", height: "24px" }}
                    className="w-6 h-6 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <span className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.2em] block mb-2">
                  Atendimento
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase mb-4">
                  Horário de Funcionamento
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Planeje sua visita no melhor horário da sua rotina. Oferecemos agilidade, pontualidade e comodidade.
                </p>

                {/* Tabela Visual de Horários */}
                <div className="space-y-3 mb-8">
                  <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-white">Segunda a Sábado</p>
                      <p className="text-xs text-zinc-400">Atendimento contínuo</p>
                    </div>
                    <span className="text-sm font-extrabold text-[#d4af37] bg-[#d4af37]/10 px-3 py-1.5 rounded-lg border border-[#d4af37]/20">
                      09h às 20h
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60 flex items-center justify-between opacity-80">
                    <div>
                      <p className="text-sm font-medium text-zinc-400">Domingos e Feriados</p>
                      <p className="text-xs text-zinc-500">Descanso da equipe</p>
                    </div>
                    <span className="text-xs font-semibold text-zinc-400 bg-zinc-800/60 px-3 py-1.5 rounded-lg">
                      Fechado
                    </span>
                  </div>
                </div>
              </div>

              {/* Botão de Agendamento pelo WhatsApp */}
              <div>
                <a
                  href={createWhatsAppLink("Olá! Gostaria de consultar horários disponíveis na Barber Club.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg hover:shadow-emerald-900/30"
                >
                  <svg
                    width={16}
                    height={16}
                    style={{ width: "16px", height: "16px" }}
                    className="w-4 h-4 fill-current shrink-0"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.42 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.13 7.34C8.95 7.34 8.76 7.34 8.61 7.35C8.42 7.37 8.16 7.44 7.94 7.68C7.72 7.92 7.11 8.49 7.11 9.65C7.11 10.82 7.96 11.94 8.08 12.1C8.2 12.26 9.73 14.61 12.08 15.62C12.64 15.86 13.07 16.01 13.41 16.12C13.97 16.3 14.48 16.27 14.89 16.21C15.34 16.14 16.27 15.64 16.47 15.09C16.66 14.54 16.66 14.07 16.6 13.97C16.55 13.88 16.4 13.82 16.18 13.71C15.96 13.6 14.88 13.07 14.68 12.99C14.47 12.92 14.33 12.88 14.18 13.11C14.03 13.34 13.61 13.82 13.48 13.97C13.36 14.12 13.23 14.14 13.01 14.03C12.79 13.92 12.08 13.69 11.23 12.93C10.57 12.34 10.13 11.61 10.01 11.39C9.89 11.17 10 11.05 10.11 10.94C10.21 10.84 10.33 10.68 10.45 10.54C10.56 10.4 10.6 10.3 10.68 10.14C10.75 9.97 10.71 9.83 10.66 9.72C10.6 9.61 10.18 8.56 10 8.13C9.83 7.7 9.65 7.77 9.52 7.76C9.4 7.75 9.27 7.75 9.13 7.75V7.34Z" />
                  </svg>
                  Consultar Disponibilidade de Horário
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 6. RODAPÉ (FOOTER)                                                */}
      {/* ================================================================= */}
      <footer id="contato" className="bg-black border-t border-zinc-900 pt-16 pb-12 text-zinc-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-zinc-900">
            {/* Coluna 1: Marca & Conceito */}
            <div className="md:col-span-2">
              <a href="#inicio" className="flex items-center gap-3 mb-4">
                <div
                  className="w-9 h-9 rounded-full border-2 border-[#d4af37] bg-zinc-900 flex items-center justify-center text-[#d4af37] shrink-0"
                  style={{ width: "36px", height: "36px" }}
                >
                  <svg
                    width={18}
                    height={18}
                    style={{ width: "18px", height: "18px" }}
                    className="w-4 h-4 fill-current shrink-0"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 1.41 1.41L22 4.41V3h-3z" />
                  </svg>
                </div>
                <span className="font-extrabold tracking-[0.2em] text-xl text-white">
                  BARBER <span className="text-[#d4af37]">CLUB</span>
                </span>
              </a>
              <p className="text-zinc-400 text-sm max-w-sm mb-6 leading-relaxed">
                Referência em estética masculina, barba com toalha quente e cortes modernos. Atendimento pontual e atmosfera premium em Santos/SP.
              </p>

              {/* Botão WhatsApp em destaque no rodapé */}
              <div className="inline-block">
                <a
                  href={createWhatsAppLink("Olá! Gostaria de agendar um horário na Barber Club através do rodapé.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-emerald-900/40 border border-emerald-400/30"
                >
                  <svg
                    width={20}
                    height={20}
                    style={{ width: "20px", height: "20px" }}
                    className="w-5 h-5 fill-current shrink-0"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.42 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.13 7.34C8.95 7.34 8.76 7.34 8.61 7.35C8.42 7.37 8.16 7.44 7.94 7.68C7.72 7.92 7.11 8.49 7.11 9.65C7.11 10.82 7.96 11.94 8.08 12.1C8.2 12.26 9.73 14.61 12.08 15.62C12.64 15.86 13.07 16.01 13.41 16.12C13.97 16.3 14.48 16.27 14.89 16.21C15.34 16.14 16.27 15.64 16.47 15.09C16.66 14.54 16.66 14.07 16.6 13.97C16.55 13.88 16.4 13.82 16.18 13.71C15.96 13.6 14.88 13.07 14.68 12.99C14.47 12.92 14.33 12.88 14.18 13.11C14.03 13.34 13.61 13.82 13.48 13.97C13.36 14.12 13.23 14.14 13.01 14.03C12.79 13.92 12.08 13.69 11.23 12.93C10.57 12.34 10.13 11.61 10.01 11.39C9.89 11.17 10 11.05 10.11 10.94C10.21 10.84 10.33 10.68 10.45 10.54C10.56 10.4 10.6 10.3 10.68 10.14C10.75 9.97 10.71 9.83 10.66 9.72C10.6 9.61 10.18 8.56 10 8.13C9.83 7.7 9.65 7.77 9.52 7.76C9.4 7.75 9.27 7.75 9.13 7.75V7.34Z" />
                  </svg>
                  Agendar pelo WhatsApp
                </a>
                <p className="text-[11px] text-zinc-500 mt-2">
                  Demonstração: {WHATSAPP_DISPLAY_NUMBER}
                </p>
              </div>
            </div>

            {/* Coluna 2: Navegação Rápida */}
            <div>
              <p className="text-white text-xs font-bold uppercase tracking-wider mb-4">
                Navegação
              </p>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="#inicio" className="hover:text-[#d4af37] transition-colors">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="hover:text-[#d4af37] transition-colors">
                    Serviços & Preços
                  </a>
                </li>
                <li>
                  <a href="#localizacao" className="hover:text-[#d4af37] transition-colors">
                    Localização
                  </a>
                </li>
                <li>
                  <a href="#horario" className="hover:text-[#d4af37] transition-colors">
                    Horário de Funcionamento
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 3: Informações de Contato */}
            <div>
              <p className="text-white text-xs font-bold uppercase tracking-wider mb-4">
                Contato & Endereço
              </p>
              <ul className="space-y-2.5 text-sm">
                <li className="text-zinc-300">
                  Rua das Palmeiras, 123
                  <span className="block text-zinc-500 text-xs">Centro — Santos / SP</span>
                </li>
                <li className="text-zinc-300 pt-1">
                  Segunda a Sábado
                  <span className="block text-[#d4af37] text-xs font-semibold">09h às 20h</span>
                </li>
                <li className="text-zinc-300 pt-1">
                  WhatsApp de Demonstração:
                  <span className="block text-emerald-400 font-mono text-xs">{WHATSAPP_DISPLAY_NUMBER}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Linha de Direitos e Transparência */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
            <p>
              © 2026 BARBER CLUB. Todos os direitos reservados.
            </p>
            <p className="text-center sm:text-right">
              Landing page fictícia desenvolvida para demonstração comercial.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
