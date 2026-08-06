const testimonials = [
  {
    name: "Hamidou DRAME",
    rating: 5,
    text: "Une collaboration remarquable ! Je tiens à remercier M. Samba Sy pour la qualité exceptionnelle de son travail. Son professionnalisme, sa créativité et son sens du détail ont largement dépassé mes attentes. Ce fut un réel plaisir de travailler ensemble et je recommande vivement ses services.",
    time: "il y a 21 semaines",
  },
  {
    name: "Cabinet de Conseil HRA",
    rating: 5,
    text: "Samba a conçu le site internet de la Mairie de Khombole avec rigueur et professionnalisme. Le site est en cohérence avec le cahier des charges et procure un rendu institutionnel optimal. Nous recommandons fortement ses services.",
    time: "il y a 22 semaines",
  },
  {
    name: "Coutay Ba",
    rating: 5,
    text: "Excellent développeur un expert en BI",
    time: "il y a 22 semaines",
  },
  {
    name: "Elhadji Dieng",
    rating: 5,
    text: "Un très bon développeur (Web et IA) je vous le recommande fortement. Bonne continuation pour la suite frérot",
    time: "il y a 22 semaines",
  },
];

export default function Testimonials() {
  const initial = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("");

  return (
    <section className="py-24 bg-gradient-to-b from-dark-surface to-dark-bg">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-14">
          <span className="text-sm font-medium text-accent tracking-wide uppercase">Témoignages</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Ce que disent mes clients</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Retours authentiques laissés sur Google par les clients et collaborateurs de Samba SY.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative bg-dark-card border border-border-color rounded-3xl p-6 shadow-lg hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_25px_60px_rgba(0,0,0,0.45)] transition-all duration-300"
            >
              <div className="absolute -top-4 left-6 w-10 h-10 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent text-lg">
                <i className="fas fa-quote-left" />
              </div>

              <div className="flex justify-center gap-1 mb-4 mt-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i
                    key={i}
                    className={`fas fa-star text-xs ${i < t.rating ? "text-yellow-400" : "text-text-muted"}`}
                  />
                ))}
              </div>

              <p className="text-center text-text-primary leading-relaxed mb-6 min-h-[120px]">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-base mb-3">
                  {initial(t.name)}
                </div>
                <h4 className="font-semibold text-sm">{t.name}</h4>
                <p className="text-xs text-text-muted mb-2">{t.time}</p>
                <span className="inline-flex items-center gap-1 text-[10px] text-accent bg-accent/10 border border-accent/20 px-2 py-1 rounded-full">
                  <i className="fab fa-google" /> Avis vérifié Google
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
