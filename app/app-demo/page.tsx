"use client";

import { useState } from "react";

// =======================================================================
// CONFIGURAÇÃO DE DEMONSTRAÇÃO DO WHATSAPP (DADOS FICTÍCIOS)
// Para utilizar em produção comercial, basta substituir pelo número real.
// =======================================================================
const WHATSAPP_DEMO_NUMBER = "5500000000000";
const WHATSAPP_DISPLAY_NUMBER = "(00) 00000-0000";

export interface ServiceItem {
  id: string;
  title: string;
  price: string;
  priceNumber: number;
  durationMinutes: number;
  durationLabel: string;
  badge: string;
  description: string;
  image: string;
}

// Catálogo com os 5 serviços solicitados para a demonstração premium
const SERVICES: ServiceItem[] = [
  {
    id: "corte",
    title: "Corte Masculino",
    price: "R$ 40,00",
    priceNumber: 40,
    durationMinutes: 45,
    durationLabel: "45 min",
    badge: "Mais Procurado",
    description:
      "Corte personalizado com tesoura e máquina, lavagem especial, alinhamento térmico e pomada modeladora de alto padrão.",
    image:
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "barba",
    title: "Barba Tradicional",
    price: "R$ 25,00",
    priceNumber: 25,
    durationMinutes: 35,
    durationLabel: "35 min",
    badge: "Clássico",
    description:
      "Barboterapia completa com toalha quente aromática, navalha esterilizada, óleo hidratante e massagem relaxante.",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "combo",
    title: "Corte + Barba",
    price: "R$ 55,00",
    priceNumber: 55,
    durationMinutes: 75,
    durationLabel: "75 min",
    badge: "Melhor Custo-Benefício",
    description:
      "Combo definitivo para renovar seu visual: corte completo somado ao ritual tradicional de barboterapia com valor especial.",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "sobrancelha",
    title: "Sobrancelha",
    price: "R$ 25,00",
    priceNumber: 25,
    durationMinutes: 20,
    durationLabel: "20 min",
    badge: "Detalhes & Acabamento",
    description:
      "Design e alinhamento de sobrancelha masculina na navalha e pinça, harmonizando a linha facial com precisão cirúrgica.",
    image: "/images/sobrancelha.jpg",
  },
  {
    id: "tesoura",
    title: "Corte de Tesoura",
    price: "R$ 50,00",
    priceNumber: 50,
    durationMinutes: 60,
    durationLabel: "60 min",
    badge: "Artesanal Premium",
    description:
      "Trabalho 100% manual e artesanal na tesoura, respeitando o caimento natural dos fios, textura e formato craniano.",
    image: "/images/corte-tesoura.jpg",
  },
];

const PREFERRED_DAYS = [
  { id: "hoje", label: "Hoje", hint: "Disponível" },
  { id: "amanha", label: "Amanhã", hint: "Disponível" },
  { id: "quinta", label: "Quinta-feira", hint: "Horários livres" },
  { id: "sexta", label: "Sexta-feira", hint: "Mais concorrido" },
  { id: "sabado", label: "Sábado", hint: "Últimas vagas" },
];

const TIME_SLOTS = [
  "09:30",
  "10:30",
  "11:30",
  "14:00",
  "15:00",
  "16:30",
  "18:00",
  "19:00",
];

export default function AppDemoPage() {
  const [activeTab, setActiveTab] = useState<"agendar" | "servicos" | "unidade">(
    "agendar"
  );
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>([
    "corte",
  ]);
  const [selectedDay, setSelectedDay] = useState<string>("hoje");
  const [selectedTime, setSelectedTime] = useState<string>("14:00");
  const [clientName, setClientName] = useState<string>("");
  const [notes, setNotes] = useState<string>("");

  const toggleService = (id: string) => {
    setSelectedServiceIds((prev) => {
      if (prev.includes(id)) {
        if (prev.length === 1) return prev; // Mantém ao menos um serviço marcado
        return prev.filter((item) => item !== id);
      }
      return [...prev, id];
    });
  };

  const selectedServices = SERVICES.filter((s) =>
    selectedServiceIds.includes(s.id)
  );

  const totalPrice = selectedServices.reduce(
    (acc, item) => acc + item.priceNumber,
    0
  );

  const totalDuration = selectedServices.reduce(
    (acc, item) => acc + item.durationMinutes,
    0
  );

  const selectedDayLabel =
    PREFERRED_DAYS.find((d) => d.id === selectedDay)?.label || "Hoje";

  const buildWhatsAppMessage = () => {
    const servicesList = selectedServices
      .map((s) => `• ${s.title} (${s.price}) [~${s.durationLabel}]`)
      .join("\n");

    const nomeFormatado = clientName.trim() ? clientName.trim() : "Cliente";

    let msg = `Olá! Gostaria de solicitar um agendamento pelo App Barber Club:\n\n`;
    msg += `👤 *Nome:* ${nomeFormatado}\n`;
    msg += `✂️ *Serviço(s) Selecionado(s):*\n${servicesList}\n\n`;
    msg += `⏱️ *Duração Estimada:* ${totalDuration} min\n`;
    msg += `💰 *Valor Total Estimado:* R$ ${totalPrice},00\n\n`;
    msg += `📅 *Preferência de Dia:* ${selectedDayLabel}\n`;
    msg += `⏰ *Preferência de Horário:* ${selectedTime}\n`;

    if (notes.trim()) {
      msg += `📝 *Observação:* ${notes.trim()}\n`;
    }

    msg += `\n_(Mensagem gerada pelo protótipo comercial da Barber Club - Santos/SP)_`;
    return msg;
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_DEMO_NUMBER}?text=${encodeURIComponent(
    buildWhatsAppMessage()
  )}`;

  return (
    <div
      className="min-h-screen bg-[#0a0a0a] text-zinc-100 flex flex-col selection:bg-[#d4af37] selection:text-black"
      style={{ backgroundColor: "#0a0a0a", color: "#ededed" }}
    >
      {/* ================================================================= */}
      {/* 1. CABEÇALHO (HEADER PREMIUM TOTALMENTE ALINHADO)                 */}
      {/* ================================================================= */}
      <header className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-zinc-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Logo e Identificação */}
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#d4af37] rounded-lg p-1"
            >
              <div
                className="w-10 h-10 rounded-full border-2 border-[#d4af37] bg-zinc-900 flex items-center justify-center text-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.25)] group-hover:scale-105 transition-transform shrink-0"
                style={{ width: "40px", height: "40px" }}
              >
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
                <div className="flex items-center gap-2">
                  <span className="font-extrabold tracking-[0.2em] text-lg sm:text-xl text-white block leading-tight">
                    BARBER <span className="text-[#d4af37]">CLUB</span>
                  </span>
                  <span className="bg-[#d4af37]/20 text-[#f3e5ab] text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full border border-[#d4af37]/40 shadow-sm">
                    APP DEMO
                  </span>
                </div>
                <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-400 block">
                  Santos / SP
                </span>
              </div>
            </a>
          </div>

          {/* Navegação Desktop por Abas */}
          <nav className="hidden md:flex items-center gap-1.5 bg-zinc-900/90 border border-zinc-800 rounded-full p-1.5 shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab("agendar")}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === "agendar"
                  ? "bg-[#d4af37] text-black shadow-md font-extrabold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Agendamento
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("servicos")}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === "servicos"
                  ? "bg-[#d4af37] text-black shadow-md font-extrabold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Serviços & Preços
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("unidade")}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === "unidade"
                  ? "bg-[#d4af37] text-black shadow-md font-extrabold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Unidade & Horários
            </button>
          </nav>

          {/* Botão para Retornar à Landing Page */}
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-300 hover:text-[#d4af37] border border-zinc-700/80 hover:border-[#d4af37]/60 rounded-xl px-4 py-2.5 bg-zinc-900/80 hover:bg-zinc-800 transition-all shadow-sm"
            >
              <svg
                width={14}
                height={14}
                style={{ width: "14px", height: "14px" }}
                className="w-3.5 h-3.5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Voltar ao Site</span>
            </a>
          </div>
        </div>

        {/* =============================================================== */}
        {/* 2. AVISO DE DEMONSTRAÇÃO (FAIXA HORIZONTAL ESCURA COM DOURADO) */}
        {/* =============================================================== */}
        <div className="bg-zinc-950/90 border-t border-b border-[#d4af37]/30 px-4 py-2.5 text-center shadow-inner">
          <p className="text-xs text-zinc-300 max-w-4xl mx-auto flex items-center justify-center gap-2 flex-wrap">
            <span className="inline-block w-2 h-2 rounded-full bg-[#d4af37] shrink-0 shadow-[0_0_8px_#d4af37]" />
            <span>
              <strong className="text-[#f3e5ab] uppercase tracking-wider font-bold">Aviso de Demonstração:</strong>{" "}
              O Barber Club App é um protótipo comercial demonstrativo. Horários, preços e telefone fictício{" "}
              <span className="text-[#d4af37] font-semibold">{WHATSAPP_DISPLAY_NUMBER}</span> servem apenas para apresentação a clientes.
            </span>
          </p>
        </div>
      </header>

      {/* ================================================================= */}
      {/* 3. CONTEÚDO PRINCIPAL (LAYOUT AMPLO, CENTRALIZADO E RESPONSIVO)  */}
      {/* ================================================================= */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 pb-28 md:pb-16 space-y-12">
        {/* =============================================================== */}
        {/* ABA 1: FLUXO DE AGENDAMENTO COMPLETO                            */}
        {/* =============================================================== */}
        {activeTab === "agendar" && (
          <div className="space-y-12">
            {/* Cabeçalho da Seção */}
            <div className="text-center sm:text-left border-b border-zinc-800/80 pb-6">
              <span className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.25em] block mb-1">
                Etapa 1 de 2
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight">
                Selecione os Serviços
              </h1>
              <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
                Escolha um ou mais procedimentos para o seu atendimento. O valor total e o tempo estimado são recalculados automaticamente.
              </p>
            </div>

            {/* SEÇÃO DE SERVIÇOS: 5 Cards em Grade Responsiva (3 Colunas no Desktop) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {SERVICES.map((service) => {
                const isSelected = selectedServiceIds.includes(service.id);
                return (
                  <div
                    key={service.id}
                    onClick={() => toggleService(service.id)}
                    className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-xl ${
                      isSelected
                        ? "bg-zinc-950 border-[#d4af37] ring-2 ring-[#d4af37]/60 shadow-[0_10px_30px_rgba(212,175,55,0.2)] -translate-y-1.5"
                        : "bg-zinc-950/80 border-zinc-800/90 hover:border-zinc-700 hover:-translate-y-0.5"
                    }`}
                  >
                    <div>
                      {/* Fotografia Vertical do Serviço com Proporção Consistente */}
                      <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-zinc-900">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90 contrast-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

                        {/* Indicador de Seleção no Topo Esquerdo */}
                        {isSelected && (
                          <span className="absolute top-3.5 left-3.5 bg-[#d4af37] text-black font-extrabold text-[11px] uppercase tracking-wider px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5">
                            <svg
                              width={12}
                              height={12}
                              style={{ width: "12px", height: "12px" }}
                              className="w-3 h-3 fill-current shrink-0"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Selecionado
                          </span>
                        )}

                        {/* Badge de Destaque no Topo Direito */}
                        <span className="absolute top-3.5 right-3.5 bg-zinc-900/90 text-[#f3e5ab] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#d4af37]/40 shadow-md">
                          {service.badge}
                        </span>

                        {/* Duração Estimada na Base da Imagem */}
                        <span className="absolute bottom-3 left-3 text-xs text-zinc-300 flex items-center gap-1.5 bg-black/70 px-2.5 py-1 rounded-md backdrop-blur-sm border border-zinc-700/60 font-medium">
                          <svg
                            width={12}
                            height={12}
                            style={{ width: "12px", height: "12px" }}
                            className="w-3 h-3 text-[#d4af37] shrink-0"
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
                          {service.durationLabel}
                        </span>
                      </div>

                      {/* Conteúdo Informativo do Card */}
                      <div className="p-6 space-y-3">
                        <div className="flex items-baseline justify-between gap-2">
                          <h2 className="text-xl font-bold text-white group-hover:text-[#f3e5ab] transition-colors">
                            {service.title}
                          </h2>
                          <span className="text-2xl font-black text-[#d4af37] shrink-0">
                            {service.price}
                          </span>
                        </div>
                        <p className="text-sm text-zinc-400 leading-relaxed min-h-[50px]">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Botão de Seleção do Card */}
                    <div className="p-6 pt-0 border-t border-zinc-800/60 mt-4">
                      <button
                        type="button"
                        className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                          isSelected
                            ? "bg-[#d4af37] text-black shadow-md font-extrabold"
                            : "bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-700 hover:border-zinc-500"
                        }`}
                      >
                        {isSelected ? (
                          <>
                            <svg
                              width={14}
                              height={14}
                              style={{ width: "14px", height: "14px" }}
                              className="w-3.5 h-3.5 shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span>Selecionado</span>
                          </>
                        ) : (
                          <span>Selecionar +</span>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* SEÇÃO 2: DIA, HORÁRIO, DADOS E RESUMO (Layout de 2 Colunas no Computador) */}
            <div className="pt-8 border-t border-zinc-800/80">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Coluna Esquerda: Formulário de Agendamento (7 Colunas) */}
                <div className="lg:col-span-7 space-y-8">
                  <div className="bg-zinc-950 p-6 sm:p-8 rounded-2xl border border-zinc-800/90 space-y-8 shadow-xl">
                    <div>
                      <span className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.2em] block mb-1">
                        Etapa 2 de 2
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight">
                        Preferência de Atendimento
                      </h2>
                      <p className="text-xs text-zinc-400 mt-1">
                        Escolha o dia da semana e um horário conveniente para o seu corte ou barba.
                      </p>
                    </div>

                    {/* 4. Escolha do Dia em Grade Responsiva */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block">
                          Dia da Semana:
                        </label>
                        <span className="text-[11px] text-[#d4af37] font-semibold">
                          Marcado: {selectedDayLabel}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                        {PREFERRED_DAYS.map((day) => {
                          const isDaySelected = selectedDay === day.id;
                          return (
                            <button
                              key={day.id}
                              type="button"
                              onClick={() => setSelectedDay(day.id)}
                              className={`w-full py-3.5 px-3 rounded-xl text-center text-xs font-bold transition-all border flex flex-col items-center justify-center gap-1 ${
                                isDaySelected
                                  ? "bg-[#d4af37] text-black border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.3)] scale-[1.03]"
                                  : "bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border-zinc-800 hover:border-zinc-700"
                              }`}
                            >
                              <span>{day.label}</span>
                              <span
                                className={`text-[9px] font-normal tracking-wide ${
                                  isDaySelected ? "text-zinc-950 font-semibold" : "text-zinc-500"
                                }`}
                              >
                                {day.hint}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* 4. Escolha do Horário em Grade Uniforme */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block">
                          Horário de Atendimento:
                        </label>
                        <span className="text-[11px] text-[#d4af37] font-semibold">
                          Marcado: {selectedTime}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {TIME_SLOTS.map((time) => {
                          const isTimeSelected = selectedTime === time;
                          return (
                            <button
                              key={time}
                              type="button"
                              onClick={() => setSelectedTime(time)}
                              className={`py-3.5 px-2 rounded-xl text-xs font-mono font-bold transition-all border text-center ${
                                isTimeSelected
                                  ? "bg-[#d4af37] text-black border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.3)] scale-[1.03]"
                                  : "bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border-zinc-800 hover:border-zinc-700 hover:text-white"
                              }`}
                            >
                              {time}
                            </button>
                          );
                        })}
                      </div>
                      <p className="text-[11px] text-zinc-500">
                        * Horários fictícios para simulação comercial (segunda a sábado, das 09h às 20h).
                      </p>
                    </div>

                    {/* 5. Dados do Cliente */}
                    <div className="space-y-4 pt-4 border-t border-zinc-800/80">
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-1.5">
                          Nome Completo:
                        </label>
                        <input
                          type="text"
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          placeholder="Ex: Carlos Silva"
                          className="w-full bg-zinc-900/90 border border-zinc-700/80 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all"
                          style={{ backgroundColor: "#18181b", borderColor: "#3f3f46", color: "#ffffff" }}
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-1.5">
                          Observações do Atendimento (opcional):
                        </label>
                        <input
                          type="text"
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder="Ex: Preferência por corte com tesoura nas laterais"
                          className="w-full bg-zinc-900/90 border border-zinc-700/80 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all"
                          style={{ backgroundColor: "#18181b", borderColor: "#3f3f46", color: "#ffffff" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 6. Coluna Direita: Resumo do Agendamento (5 Colunas) */}
                <div className="lg:col-span-5 sticky top-24 space-y-4">
                  <div className="bg-zinc-950 p-6 sm:p-7 rounded-2xl border border-zinc-800/90 shadow-2xl space-y-6">
                    <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                      <div>
                        <span className="text-[10px] font-bold text-[#d4af37] uppercase tracking-widest block">
                          Resumo Comercial
                        </span>
                        <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                          Seu Agendamento
                        </h3>
                      </div>
                      <span className="text-xs text-[#d4af37] font-bold bg-[#d4af37]/10 px-3 py-1.5 rounded-full border border-[#d4af37]/40 shadow-sm">
                        {selectedDayLabel} às {selectedTime}
                      </span>
                    </div>

                    {/* Lista dos Serviços Selecionados */}
                    <div className="space-y-3">
                      <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold block">
                        Serviços Inclusos ({selectedServices.length}):
                      </span>
                      <div className="space-y-2">
                        {selectedServices.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center justify-between text-sm py-2 px-3 rounded-lg bg-zinc-900/60 border border-zinc-800/80"
                          >
                            <div className="flex items-center gap-1.5">
                              <span className="text-[#d4af37]">•</span>
                              <span className="text-zinc-200 font-medium">{item.title}</span>
                              <span className="text-[11px] text-zinc-500">({item.durationLabel})</span>
                            </div>
                            <span className="font-bold text-[#d4af37]">{item.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Duração e Totais Calculados */}
                    <div className="pt-4 border-t border-zinc-800/80 space-y-2.5">
                      <div className="flex items-center justify-between text-xs text-zinc-400">
                        <span>Tempo Total Estimado:</span>
                        <span className="font-semibold text-zinc-200">
                          {totalDuration} minutos
                        </span>
                      </div>
                      {clientName.trim() && (
                        <div className="flex items-center justify-between text-xs text-zinc-400">
                          <span>Cliente:</span>
                          <span className="font-semibold text-zinc-200">
                            {clientName.trim()}
                          </span>
                        </div>
                      )}
                      <div className="flex items-baseline justify-between pt-3 border-t border-zinc-800">
                        <span className="text-sm font-bold text-zinc-200">
                          Valor Total Estimado:
                        </span>
                        <span className="text-3xl font-black text-[#d4af37]">
                          R$ {totalPrice},00
                        </span>
                      </div>
                    </div>

                    {/* Botão de Envio de Pedido pelo WhatsApp */}
                    <div className="pt-2 space-y-3">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold py-4 px-6 rounded-xl shadow-[0_10px_25px_rgba(5,150,105,0.4)] hover:shadow-[0_15px_30px_rgba(5,150,105,0.55)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base uppercase tracking-wider border border-emerald-400/30"
                      >
                        <svg
                          width={22}
                          height={22}
                          style={{ width: "22px", height: "22px" }}
                          className="w-5.5 h-5.5 fill-current shrink-0"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.42 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.13 7.34C8.95 7.34 8.76 7.34 8.61 7.35C8.42 7.37 8.16 7.44 7.94 7.68C7.72 7.92 7.11 8.49 7.11 9.65C7.11 10.82 7.96 11.94 8.08 12.1C8.2 12.26 9.73 14.61 12.08 15.62C12.64 15.86 13.07 16.01 13.41 16.12C13.97 16.3 14.48 16.27 14.89 16.21C15.34 16.14 16.27 15.64 16.47 15.09C16.66 14.54 16.66 14.07 16.6 13.97C16.55 13.88 16.4 13.82 16.18 13.71C15.96 13.6 14.88 13.07 14.68 12.99C14.47 12.92 14.33 12.88 14.18 13.11C14.03 13.34 13.61 13.82 13.48 13.97C13.36 14.12 13.23 14.14 13.01 14.03C12.79 13.92 12.08 13.69 11.23 12.93C10.57 12.34 10.13 11.61 10.01 11.39C9.89 11.17 10 11.05 10.11 10.94C10.21 10.84 10.33 10.68 10.45 10.54C10.56 10.4 10.6 10.3 10.68 10.14C10.75 9.97 10.71 9.83 10.66 9.72C10.6 9.61 10.18 8.56 10 8.13C9.83 7.7 9.65 7.77 9.52 7.76C9.4 7.75 9.27 7.75 9.13 7.75V7.34Z" />
                        </svg>
                        <span>Enviar Pedido pelo WhatsApp</span>
                      </a>
                      <p className="text-[11px] text-zinc-500 text-center">
                        Demonstração Comercial • Telefone {WHATSAPP_DISPLAY_NUMBER} • Sem cobrança na página
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =============================================================== */}
        {/* ABA 2: DETALHES DOS SERVIÇOS EM GRADE AMPLA (TODOS OS 5 CARDS) */}
        {/* =============================================================== */}
        {activeTab === "servicos" && (
          <div className="space-y-8">
            <div className="text-center sm:text-left border-b border-zinc-800/80 pb-6">
              <span className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.25em] block mb-1">
                Catálogo Barber Club
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight">
                Tabela Completa de Serviços
              </h1>
              <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
                Conheça os diferenciais e o padrão técnico exclusivo de cada serviço disponível na Barber Club em Santos/SP.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {SERVICES.map((s) => (
                <div
                  key={s.id}
                  className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between hover:border-[#d4af37]/50 transition-all duration-300"
                >
                  <div>
                    <div className="relative h-56 w-full bg-zinc-900 overflow-hidden">
                      <img
                        src={s.image}
                        alt={s.title}
                        className="w-full h-full object-cover object-center filter brightness-90 contrast-110"
                      />
                      <span className="absolute top-3.5 right-3.5 bg-zinc-950/90 text-[#f3e5ab] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#d4af37]/40 shadow">
                        {s.badge}
                      </span>
                    </div>
                    <div className="p-6 space-y-3">
                      <div className="flex items-baseline justify-between gap-2">
                        <h3 className="text-xl font-bold text-white">{s.title}</h3>
                        <span className="text-2xl font-black text-[#d4af37]">
                          {s.price}
                        </span>
                      </div>
                      <p className="text-sm text-zinc-400 leading-relaxed min-h-[50px]">
                        {s.description}
                      </p>
                      <div className="pt-2 flex items-center justify-between text-xs text-zinc-400">
                        <span className="flex items-center gap-1.5 bg-zinc-900/80 px-2.5 py-1 rounded border border-zinc-800">
                          <svg
                            width={12}
                            height={12}
                            style={{ width: "12px", height: "12px" }}
                            className="w-3 h-3 text-[#d4af37]"
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
                          {s.durationLabel}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 mt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedServiceIds([s.id]);
                        setActiveTab("agendar");
                      }}
                      className="w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-zinc-900 hover:bg-[#d4af37] text-zinc-200 hover:text-black border border-zinc-700 hover:border-[#d4af37] transition-all"
                    >
                      Agendar Este Procedimento →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =============================================================== */}
        {/* ABA 3: UNIDADE, HORÁRIOS & CONTATO EM GRADE AMPLA               */}
        {/* =============================================================== */}
        {activeTab === "unidade" && (
          <div className="space-y-8">
            <div className="text-center sm:text-left border-b border-zinc-800/80 pb-6">
              <span className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.25em] block mb-1">
                Localização & Atendimento
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight">
                Nossa Barbearia em Santos
              </h1>
              <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
                Espaço climatizado, atmosfera premium e conveniência no coração de Santos/SP.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {/* Card de Localização */}
              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-7 space-y-4 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] mb-3">
                    <svg
                      width={20}
                      height={20}
                      style={{ width: "20px", height: "20px" }}
                      className="w-5 h-5 shrink-0"
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
                  <h3 className="text-base font-bold text-white uppercase tracking-wider">
                    Endereço
                  </h3>
                  <p className="text-xs text-[#d4af37] mt-0.5">Centro — Santos / SP</p>

                  <div className="mt-4 bg-zinc-900/90 p-4 rounded-xl border border-zinc-800 text-sm space-y-1">
                    <p className="font-bold text-white">Rua das Palmeiras, 123</p>
                    <p className="text-xs text-zinc-400">Santos / SP • CEP 11000-000</p>
                    <p className="text-[11px] text-[#d4af37] pt-2">
                      (Endereço fictício para fins de demonstração comercial)
                    </p>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=Centro+Santos+SP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold uppercase tracking-wider border border-zinc-700 hover:border-[#d4af37]/50 transition-colors"
                >
                  Abrir Mapa Demonstrativo
                </a>
              </div>

              {/* Card de Horários */}
              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-7 space-y-4 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] mb-3">
                    <svg
                      width={20}
                      height={20}
                      style={{ width: "20px", height: "20px" }}
                      className="w-5 h-5 shrink-0"
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
                  <h3 className="text-base font-bold text-white uppercase tracking-wider">
                    Horário
                  </h3>
                  <p className="text-xs text-[#d4af37] mt-0.5">Pontualidade & Comodidade</p>

                  <div className="mt-4 space-y-2 text-xs">
                    <div className="flex items-center justify-between p-3 bg-zinc-900/90 rounded-xl border border-zinc-800">
                      <span className="text-zinc-200 font-medium">Segunda a Sábado</span>
                      <span className="font-bold text-[#d4af37]">09h às 20h</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-zinc-900/50 rounded-xl border border-zinc-800/80 text-zinc-500">
                      <span>Domingos e Feriados</span>
                      <span className="text-zinc-400">Fechado</span>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-zinc-500 text-center">
                  Atendimento com hora marcada e confirmação prévia.
                </p>
              </div>

              {/* Card de Comodidades */}
              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-7 space-y-4 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] mb-3">
                    <svg
                      width={20}
                      height={20}
                      style={{ width: "20px", height: "20px" }}
                      className="w-5 h-5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-white uppercase tracking-wider">
                    Comodidades
                  </h3>
                  <p className="text-xs text-[#d4af37] mt-0.5">Experiência Completa</p>

                  <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center gap-1.5 text-zinc-300">
                      <span className="text-[#d4af37] font-bold">✓</span> Toalha Quente
                    </div>
                    <div className="p-2.5 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center gap-1.5 text-zinc-300">
                      <span className="text-[#d4af37] font-bold">✓</span> Wi-Fi Grátis
                    </div>
                    <div className="p-2.5 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center gap-1.5 text-zinc-300">
                      <span className="text-[#d4af37] font-bold">✓</span> Cerveja Cortesia
                    </div>
                    <div className="p-2.5 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center gap-1.5 text-zinc-300">
                      <span className="text-[#d4af37] font-bold">✓</span> Climatizado
                    </div>
                  </div>
                </div>

                <a
                  href="/"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#d4af37] hover:bg-[#aa820a] text-black text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
                >
                  Conhecer a Landing Page
                </a>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ================================================================= */}
      {/* 4. BARRA DE NAVEGAÇÃO INFERIOR PARA CELULAR (md:hidden)           */}
      {/* ================================================================= */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0d0d0d]/95 backdrop-blur-md border-t border-zinc-800/90 px-4 py-2.5 flex items-center justify-around shadow-2xl">
        <button
          type="button"
          onClick={() => setActiveTab("agendar")}
          className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-all ${
            activeTab === "agendar"
              ? "text-[#d4af37] font-bold scale-105"
              : "text-zinc-500 hover:text-zinc-300"
          }`}
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-[10px]">Agendar</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("servicos")}
          className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-all ${
            activeTab === "servicos"
              ? "text-[#d4af37] font-bold scale-105"
              : "text-zinc-500 hover:text-zinc-300"
          }`}
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879a3 3 0 11-4.242-4.242L10.757 7.757m0 0l-2.879-2.879a3 3 0 10-4.242 4.242L6.515 12"
            />
          </svg>
          <span className="text-[10px]">Serviços</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("unidade")}
          className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-all ${
            activeTab === "unidade"
              ? "text-[#d4af37] font-bold scale-105"
              : "text-zinc-500 hover:text-zinc-300"
          }`}
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
          <span className="text-[10px]">Unidade</span>
        </button>

        <a
          href="/"
          className="flex flex-col items-center gap-1 py-1 px-3 rounded-xl text-zinc-500 hover:text-zinc-300 transition-all"
          title="Ir para a Landing Page principal"
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span className="text-[10px]">Landing Page</span>
        </a>
      </nav>
    </div>
  );
}
