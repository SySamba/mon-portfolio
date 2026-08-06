"use client";

import { useState, useRef, useEffect } from "react";

const quickButtons = [
  { icon: "💰", label: "Devis IA", message: "Je veux un devis pour un projet IA" },
  { icon: "☁️", label: "Cloud AWS", message: "Parlez-moi de vos services Cloud AWS" },
  { icon: "📊", label: "Projets", message: "Quels sont vos projets Data Science ?" },
];

const phone = "221773784814";
const whatsappLink = (text: string) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

const botWelcome = `👋 Salut ! Je suis SambaBot, l'assistant IA de Samba SY.

Je peux vous aider avec :
• 🤖 Questions sur l'IA et Machine Learning
• ☁️ Solutions Cloud AWS et DevOps
• 📊 Projets Data Science et Analytics
• 💼 Services et devis personnalisés

Comment puis-je vous aider aujourd'hui ?`;

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
    setMessages((m) => [...m, { from: "user", text }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        { from: "bot", text: "Merci pour votre message ! Samba SY vous répondra très bientôt." },
      ]);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="group relative w-16 h-16 rounded-full bg-gradient-to-br from-[#25d366] to-[#128c7e] text-white flex items-center justify-center shadow-[0_0_25px_rgba(37,211,102,0.5)] hover:shadow-[0_0_40px_rgba(37,211,102,0.7)] transition-all duration-300 hover:scale-110"
          aria-label="Ouvrir le chat"
        >
          <span className="absolute inset-0 rounded-full bg-[#25d366] opacity-30 animate-ping" />
          <i className="fab fa-whatsapp text-3xl relative z-10" />
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs font-bold flex items-center justify-center z-20 shadow-md">1</span>
        </button>
      )}

      {open && (
        <div className="w-[360px] max-w-[92vw] bg-dark-card/95 backdrop-blur-xl border border-border-color rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-fade-in-up">
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary to-accent text-white">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full bg-white/20 flex items-center justify-center">
                <i className="fas fa-robot text-xl" />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-primary" />
              </div>
              <div>
                <h4 className="font-semibold">SambaBot IA</h4>
                <span className="text-xs opacity-90 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" /> En ligne
                </span>
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Fermer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
              <i className="fas fa-times" />
            </button>
          </div>

          <div className="h-72 overflow-y-auto p-4 space-y-4 bg-dark-surface/40">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[82%] whitespace-pre-line rounded-2xl px-4 py-3 text-sm leading-relaxed ${msg.from === "user" ? "bg-primary text-white rounded-br-none" : "bg-dark-card text-text-primary rounded-bl-none border border-border-color"}`}>
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
                  {btn.icon} {btn.label}
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
                placeholder="Tapez votre message..."
                className="flex-1 bg-dark-surface border border-border-color rounded-full px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-accent"
              />
              <button type="submit" className="p-2.5 rounded-full bg-primary text-white hover:opacity-90 transition-opacity" aria-label="Envoyer">
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
