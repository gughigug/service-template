"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  Menu,
  X,
  Sun,
  Moon,
  Layers,
  ShieldCheck,
  PieChart,
  Workflow,
  MonitorSmartphone,
  ArrowRightCircle,
  Briefcase,
} from "lucide-react";
import Image from "next/image";



gsap.registerPlugin(ScrollTrigger);

export default function ServicePlatformShell() {
  const rootRef = useRef(null);
  const [mobileOpen, setMobileOpen] = useState(false);
const [isDark, setIsDark] = useState(true);

  // Animazioni GSAP
  useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".nav-item", {
        y: -14,
        opacity: 0,
        stagger: 0.08,
        duration: 0.4,
        ease: "power3.out",
        delay: 0.1,
      });

      gsap.utils.toArray(".reveal-on-scroll").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 26,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        });
      });

      gsap.from(".hero-preview-card", {
        opacity: 0,
        y: 30,
        scale: 0.96,
        duration: 0.7,
        ease: "power3.out",
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 300);
    }
    setMobileOpen(false);
  };

  // helper per tema
  const bgMain = isDark ? "bg-slate-950" : "bg-slate-50";
  const textMain = isDark ? "text-slate-50" : "text-slate-900";
  const headerBg = isDark ? "bg-slate-950/90 border-slate-800" : "bg-white/80 border-slate-200/60";
  const cardBg = isDark ? "bg-slate-900/80 border-slate-800" : "bg-white/80 border-slate-200/80";
  const bandBg = isDark ? "bg-slate-950/90 border-slate-800" : "bg-white/80 border-slate-200/70";
  const subtleText = isDark ? "text-slate-300" : "text-slate-700";
  const subtleText2 = isDark ? "text-slate-400" : "text-slate-500";

  return (
    <div ref={rootRef} className={`min-h-screen ${bgMain} ${textMain} antialiased transition-colors duration-300`}>
      {/* HEADER */}
      <header className={`fixed w-full z-40 backdrop-blur-sm shadow-sm border-b ${headerBg}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo + shell info */}
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-400 shadow-sm flex items-center justify-center text-xs font-bold text-white">
                SP
              </div>
              <div className="hidden sm:flex flex-col leading-tight">
                <span className="text-xs font-semibold tracking-wide">
                  Service Platform Shell
                </span>
                <span className={`text-[10px] uppercase tracking-[0.18em] ${subtleText2}`}>
                  guglielmogiannattasio.exe · v01
                </span>
              </div>
            </div>

            {/* Nav desktop */}
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <button onClick={() => scrollToId("overview")} className="nav-item font-medium hover:opacity-90">
                Overview
              </button>
              <button onClick={() => scrollToId("workflow")} className="nav-item font-medium hover:opacity-90">
                Workflow
              </button>
              <button onClick={() => scrollToId("modules")} className="nav-item font-medium hover:opacity-90">
                Moduli
              </button>
              <button onClick={() => scrollToId("access")} className="nav-item font-medium hover:opacity-90">
                Accesso
              </button>

              {/* Dark mode toggle */}
              <button
                onClick={() => setIsDark((prev) => !prev)}
                className={`nav-item ml-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium shadow-sm transition-colors ${
                  isDark
                    ? "border-slate-700 bg-slate-900/70 hover:bg-slate-800"
                    : "border-slate-200 bg-white/80 hover:bg-slate-100"
                }`}
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <>
                    <Sun size={14} className="text-amber-300" />
                    <span>Light</span>
                  </>
                ) : (
                  <>
                    <Moon size={14} className="text-indigo-500" />
                    <span>Dark</span>
                  </>
                )}
              </button>
            </nav>

            {/* Mobile: toggle + menu button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setIsDark((prev) => !prev)}
                className={`p-2 rounded-full border ${
                  isDark
                    ? "border-slate-700 bg-slate-900/80"
                    : "border-slate-200 bg-white/80"
                }`}
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun size={18} className="text-amber-300" />
                ) : (
                  <Moon size={18} className="text-indigo-500" />
                )}
              </button>

              <button
                onClick={() => setMobileOpen(true)}
                className={`p-2 rounded-md ${
                  isDark ? "hover:bg-slate-800" : "hover:bg-slate-100"
                }`}
              >
                <Menu size={26} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile nav overlay */}
      {mobileOpen && (
        <div
          className={`fixed inset-0 z-50 backdrop-blur-sm flex flex-col items-center justify-center gap-8 ${
            isDark ? "bg-slate-950/95" : "bg-white/95"
          }`}
        >
          <button
            onClick={() => setMobileOpen(false)}
            className={`absolute top-4 right-4 p-2 rounded-md ${
              isDark ? "hover:bg-slate-800" : "hover:bg-slate-100"
            }`}
          >
            <X size={28} />
          </button>
          <button
            onClick={() => scrollToId("overview")}
            className="text-xl font-medium hover:text-indigo-500"
          >
            Overview
          </button>
          <button
            onClick={() => scrollToId("workflow")}
            className="text-xl font-medium hover:text-indigo-500"
          >
            Workflow
          </button>
          <button
            onClick={() => scrollToId("modules")}
            className="text-xl font-medium hover:text-indigo-500"
          >
            Moduli
          </button>
          <button
            onClick={() => scrollToId("access")}
            className={`px-6 py-3 rounded-2xl border-2 font-semibold shadow hover:shadow-md transition ${
              isDark
                ? "border-indigo-400 bg-indigo-500 text-white"
                : "border-indigo-500 bg-indigo-500 text-white"
            }`}
          >
            Accesso
          </button>
        </div>
      )}

      <main className="pt-20 md:pt-24">
        {/* HERO / OVERVIEW */}
        <section
          id="overview"
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
        >
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Testo hero */}
            <div className="space-y-6">
              <div
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 ${
                  isDark
                    ? "border-slate-700 bg-slate-900/80"
                    : "border-slate-200 bg-white/80"
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className={`text-[10px] uppercase tracking-[0.22em] ${subtleText2}`}>
                  Service platform shell · multi-brand ready
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
                Una landing per piattaforme, SaaS e servizi digitali.
              </h1>

              <p className={`text-sm sm:text-base leading-relaxed ${subtleText}`}>
                Un telaio front-end pensato per prodotti complessi: overview del
                servizio, vantaggi, flusso di lavoro, moduli applicativi e
                invito all’accesso. Tutto personalizzabile su brand, tono e
                integrazioni.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => scrollToId("workflow")}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-500 transition-colors"
                >
                  <Workflow size={18} />
                  <span>Guarda il workflow</span>
                </button>
                <button
                  onClick={() => scrollToId("modules")}
                  className={`inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold text-sm transition-colors ${
                    isDark
                      ? "border border-slate-600 text-slate-100 hover:bg-slate-800"
                      : "border border-slate-300 text-slate-800 hover:bg-slate-100"
                  }`}
                >
                  Esplora i moduli
                </button>
              </div>
            </div>

            {/* Preview hero */}
            <div
              className={`hero-preview-card relative rounded-3xl border shadow-lg overflow-hidden ${
                isDark ? "bg-slate-900/80 border-slate-800" : "bg-white/80 border-slate-200/80"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-sky-500/5 to-emerald-400/5 pointer-events-none" />
              <div className="relative p-5 sm:p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-7 w-7 rounded-lg bg-indigo-500/90 flex items-center justify-center text-[10px] font-bold text-white">
                      UI
                    </span>
                    <div>
                      <p className="text-xs font-semibold">Operations Overview</p>
                      <p className={`text-[11px] ${subtleText2}`}>Esempio di dashboard neutra</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 text-emerald-300 px-2 py-1 text-[10px] font-medium">
                    Touch-first
                  </span>
                </div>

                {/* Finta grid / cards */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className={`rounded-xl p-3 space-y-2 border ${cardBg}`}>
                    <p className={`text-[11px] font-semibold ${subtleText}`}>Stato processi</p>
                    <div className="space-y-1.5">
                      {["In coda", "In esecuzione", "Completati"].map((label, i) => (
                        <div key={label} className="flex items-center justify-between gap-1">
                          <span className={`text-[11px] ${subtleText2}`}>{label}</span>
                          <div className="flex items-center gap-1">
                            <span
                              className={[
                                "h-1.5 w-1.5 rounded-full",
                                i === 0
                                  ? "bg-amber-400"
                                  : i === 1
                                  ? "bg-sky-400"
                                  : "bg-emerald-400",
                              ].join(" ")}
                            />
                            <span className={`text-[11px] ${textMain}`}>{i === 0 ? "12" : i === 1 ? "4" : "98"}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`rounded-xl p-3 space-y-2 border ${cardBg}`}>
                    <p className={`text-[11px] font-semibold ${subtleText}`}>Canali attivi</p>
                    <div className="space-y-1.5">
                      {["API", "Portale", "Batch"].map((label, i) => (
                        <div key={label} className="flex items-center justify-between gap-1">
                          <span className={`text-[11px] ${subtleText2}`}>{label}</span>
                          <span className={`text-[11px] ${textMain}`}>{i === 0 ? "✓" : i === 1 ? "✓" : "·"}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`col-span-2 rounded-xl p-3 flex items-center justify-between border ${cardBg}`}>
                    <div className="space-y-1">
                      <p className={`text-[11px] uppercase tracking-[0.16em] ${subtleText2}`}>Snapshot</p>
                      <p className="text-xs font-semibold">
                        3 flussi attivi · 2 ambienti · 1 interfaccia
                      </p>
                    </div>
                    <ArrowRightCircle
                      size={20}
                      className={isDark ? "text-indigo-300" : "text-indigo-500"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className={`reveal-on-scroll border-y ${bandBg}`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex gap-3">
                <div className="mt-1">
                  <Layers
                    className={isDark ? "text-indigo-300" : "text-indigo-500"}
                    size={20}
                  />
                </div>
                <div className="space-y-1">
                  <p className={`text-xs uppercase tracking-[0.18em] ${subtleText2}`}>Layer</p>
                  <p className="text-sm font-semibold">Shell front-end neutra per piattaforme</p>
                  <p className={`text-xs ${subtleText}`}>
                    Da collegare a brand, flussi e logiche diverse senza
                    ricostruire tutto ogni volta.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="mt-1">
                  <PieChart
                    className={isDark ? "text-emerald-300" : "text-emerald-500"}
                    size={20}
                  />
                </div>
                <div className="space-y-1">
                  <p className={`text-xs uppercase tracking-[0.18em] ${subtleText2}`}>Use cases</p>
                  <p className="text-sm font-semibold">SaaS, PA, piattaforme interne</p>
                  <p className={`text-xs ${subtleText}`}>
                    Vista sintetica del servizio per utenti finali, clienti o
                    stakeholder interni.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="mt-1">
                  <ShieldCheck
                    className={isDark ? "text-sky-300" : "text-sky-500"}
                    size={20}
                  />
                </div>
                <div className="space-y-1">
                  <p className={`text-xs uppercase tracking-[0.18em] ${subtleText2}`}>Status</p>
                  <p className="text-sm font-semibold">Multi-brand ready, logic-agnostic</p>
                  <p className={`text-xs ${subtleText}`}>
                    La UI resta coerente; business, flussi e integrazioni
                    cambiano per cliente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WORKFLOW */}
        <section
          id="workflow"
          className="reveal-on-scroll max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
        >
          <h2 className="text-2xl font-bold mb-4">Workflow di alto livello</h2>
          <p className={`text-sm sm:text-base max-w-2xl mb-8 ${subtleText}`}>
            Una sequenza di step pensata per prodotti di processo: onboarding,
            configurazione, esecuzione e monitoraggio, senza vincolare il
            dominio applicativo.
          </p>

          <div className="relative">
            <div
              className={`absolute left-2 top-4 bottom-4 w-px hidden sm:block ${
                isDark ? "bg-slate-700" : "bg-slate-200"
              }`}
            />
            <div className="space-y-6 sm:space-y-4">
              {[
                {
                  icon: <Briefcase size={18} />,
                  title: "Configura contesto e attori",
                  text: "Definisci organizzazioni, ruoli, permessi e ambienti (test, produzione, cliente).",
                },
                {
                  icon: <MonitorSmartphone size={18} />,
                  title: "Imposta i flussi",
                  text: "Carichi dati o definisci regole di aggancio a sistemi esterni tramite API o connettori.",
                },
                {
                  icon: <Workflow size={18} />,
                  title: "Esegui ed orchestra",
                  text: "Avvii processi schedulati o ad-hoc, monitorando code, esiti e tempi di esecuzione.",
                },
                {
                  icon: <PieChart size={18} />,
                  title: "Osserva e affina",
                  text: "Leggi insight, controlli costi e performance, modifichi parametri senza cambiare interfaccia.",
                },
              ].map((step, idx) => (
                <div key={step.title} className="flex gap-4 sm:gap-5 items-start">
                  <div className="flex flex-col items-center">
                    <div
                      className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                        isDark ? "bg-slate-800 text-indigo-300" : "bg-indigo-50 text-indigo-600"
                      }`}
                    >
                      {idx + 1}
                    </div>
                    {idx < 3 && (
                      <div
                        className={`hidden sm:block flex-1 w-px mt-1 ${
                          isDark ? "bg-slate-700" : "bg-slate-200"
                        }`}
                      />
                    )}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={isDark ? "text-indigo-300" : "text-indigo-500"}>
                        {step.icon}
                      </span>
                      <h3 className="font-semibold text-sm sm:text-base">{step.title}</h3>
                    </div>
                    <p className={`text-xs sm:text-sm ${subtleText}`}>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

       {/* MODULES */}
<section
  id="modules"
  className="reveal-on-scroll max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20"
>
  <h2 className="text-2xl font-bold mb-4">Moduli configurabili</h2>
  <p className={`text-sm sm:text-base max-w-2xl mb-10 ${subtleText}`}>
    I moduli sono esempi di aree applicative: operatività, batch,
    osservabilità e amministrazione. Ogni progetto può decidere cosa
    esporre e cosa tenere dietro autenticazione.
  </p>

  <div className="grid md:grid-cols-2 gap-10">
    {[
      {
        title: "Operations board",
        text: "Panoramica dei processi attivi, degli ultimi eventi e degli alert critici.",
        tag: "Vista pubblica o semi-pubblica",
        img: "/1.png",
      },
      {
        title: "Batch & scheduling",
        text: "Gestione lotti, finestre temporali e regole di priorità per processi ripetitivi.",
        tag: "Perfetto per PA e utility",
        img: "/2.png",
      },
      {
        title: "Tracking & log",
        text: "Timeline degli eventi, filtri avanzati e ricerca per ID, utente o stato.",
        tag: "Support & audit",
        img: "/3.png",
      },
      {
        title: "Reportistica & costi",
        text: "Quadri di sintesi per board, controllo di gestione e stakeholder non tecnici.",
        tag: "Executive view",
        img: "/4.png",
      },
    ].map((mod) => (
      <div
        key={mod.title}
        className={`flex flex-col gap-4 rounded-2xl p-4 sm:p-5 border ${
          isDark ? "bg-slate-900/80 border-slate-800" : "bg-white/80 border-slate-200"
        }`}
      >
        <div className="aspect-[16/9] rounded-xl overflow-hidden relative">
          <Image
            src={mod.img}
            alt={mod.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-semibold text-sm sm:text-base">{mod.title}</h3>
            <span
              className={`text-[10px] rounded-full px-2 py-1 ${
                isDark ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-600"
              }`}
            >
              {mod.tag}
            </span>
          </div>
          <p className={`text-xs sm:text-sm text-justify ${subtleText}`}>{mod.text}</p>
        </div>
      </div>
    ))}
  </div>
</section>


        {/* ACCESS */}
        <section
          id="access"
          className="reveal-on-scroll max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 flex flex-col items-center text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Accesso alla piattaforma</h2>
          <p className={`text-sm sm:text-base mb-6 max-w-md ${subtleText}`}>
            Questa shell può diventare l&apos;ingresso alla tua area riservata:
            la CTA può puntare a login reale, SSO o ambienti demo separati per
            clienti e stakeholder.
          </p>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-2xl border-2 border-indigo-500 bg-indigo-500 text-white font-semibold shadow-sm hover:bg-indigo-400 hover:border-indigo-400 transition transform hover:scale-[1.02]"
          >
            <MonitorSmartphone size={18} />
            <span>Vai all&apos;area riservata</span>
          </button>
        </section>
      </main>

      {/* FOOTER / SYSTEM NOTES */}
      <footer
        className={`border-t ${
          isDark ? "border-slate-800 bg-slate-950/90" : "border-slate-200 bg-white/90"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-3 text-xs">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <div>
              © {new Date().getFullYear()} guglielmogiannattasio.exe — service
              platform shell v01
            </div>
            <div className={subtleText2}>
              Demo UI. Contenuti, logiche di dominio e integrazioni sono
              sostituibili per progetto.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
