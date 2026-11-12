"use client";

import { useState, useRef, useEffect } from "react";

const quickButtons = [
  { label: "Devis site web", message: "Bonjour Samba, je voudrais un devis pour la création d'un site web." },
  { label: "Projet IA / Data", message: "Bonjour Samba, j'ai un projet IA / data à vous présenter." },
  { label: "Application métier", message: "Bonjour Samba, j'ai besoin d'une application sur mesure pour mon entreprise." },
];

const phone = "221773784814";
const whatsappLink = (text: string) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

// Message d'accueil honnête : le widget ne simule pas un robot, il transmet
// réellement le message sur WhatsApp (avant, les messages étaient perdus).
const botWelcome = `Bonjour 👋

Décrivez votre projet en quelques mots : votre message sera envoyé directement à Samba sur WhatsApp. Réponse dans la journée.`;

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ from: "bot" | "user"; text: string }[]>([
    { from: "bot", text: botWelcome },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = (text: string) => {
    if (!text.trim()) return;
    setMessages((m) => [
      ...m,
      { from: "user", text },
      { from: "bot", text: "Merci ! WhatsApp s'ouvre avec votre message : il ne reste qu'à appuyer sur Envoyer." },
    ]);
    setInput("");
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="group relative w-[60px] h-[60px] rounded-full bg-[#25d366] text-white flex items-center justify-center shadow-[var(--shadow-lg)] transition-transform duration-300 hover:scale-105"
          aria-label="Écrire sur WhatsApp"
        >
          <i className="fab fa-whatsapp text-3xl relative z-10" />
        </button>
      )}

      {open && (
        <div className="w-[360px] max-w-[92vw] bg-dark-card/95 backdrop-blur-xl border border-border-color rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-fade-in-up">
          <div className="flex items-center justify-between p-4 bg-[var(--terracotta)] text-[#fff8ef]">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden bg-white/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/portrait.webp" alt="" className="w-full h-full object-cover object-top" />
                <span className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-[#3fae6a] rounded-full border-2 border-[var(--terracotta)]" />
              </div>
              <div>
                <p className="font-display text-lg leading-tight">Samba SY</p>
                <span className="text-xs opacity-90">Répond sur WhatsApp</span>
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Fermer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
              <i className="fas fa-times" />
            </button>
          </div>

          <div className="h-72 overflow-y-auto p-4 space-y-4 bg-dark-surface/40">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[82%] whitespace-pre-line rounded-2xl px-4 py-3 text-sm leading-relaxed ${msg.from === "user" ? "bg-[var(--terracotta)] text-[#fff8ef] rounded-br-none" : "bg-dark-card text-text-primary rounded-bl-none border border-border-color"}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          <div className="p-3 border-t border-border-color bg-dark-card">
            <div className="flex gap-2 mb-3 overflow-x-auto no-scrollbar">
              {quickButtons.map((btn) => (
                <button
                  key={btn.label}
                  onClick={() => send(btn.message)}
                  className="px-3 py-1.5 rounded-full bg-dark-surface text-xs text-text-secondary border border-border-color hover:border-accent hover:text-accent whitespace-nowrap transition-colors"
                >
                  {btn.label}
                </button>
              ))}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Votre message…"
                aria-label="Votre message"
                className="flex-1 bg-dark-surface border border-border-color rounded-full px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-accent"
              />
              <button type="submit" className="p-2.5 rounded-full bg-[var(--terracotta)] text-[#fff8ef] hover:opacity-90 transition-opacity" aria-label="Envoyer sur WhatsApp">
                <i className="fas fa-paper-plane text-sm" />
              </button>
            </form>
            <a
              href={whatsappLink("Bonjour Samba SY, j'aimerais discuter d'un projet.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-[#25d366] text-white font-medium text-sm hover:bg-[#128c7e] transition-colors"
            >
              <i className="fab fa-whatsapp" /> Continuer sur WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
