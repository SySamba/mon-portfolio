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

  const [featured, ...others] = testimonials;

  const Stars = ({ n }: { n: number }) => (
    <div className="flex gap-1 text-[var(--ochre)]" aria-label={`${n} étoiles sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <i key={i} className={`fas fa-star text-xs ${i < n ? "" : "opacity-25"}`} aria-hidden="true" />
      ))}
    </div>
  );

  const Author = ({ t }: { t: (typeof testimonials)[0] }) => (
    <div className="flex items-center gap-3">
      <div className="w-11 h-11 rounded-full bg-[var(--ocean)] flex items-center justify-center text-[#fff8ef] font-bold text-sm">
        {initial(t.name)}
      </div>
      <div>
        <p className="font-bold text-sm">{t.name}</p>
        <p className="text-xs text-text-muted">
          <i className="fab fa-google" aria-hidden="true" /> Avis Google · {t.time}
        </p>
      </div>
    </div>
  );

  return (
    <section className="py-24 lg:py-32 bg-dark-surface relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-5">
        <p className="t-label"><b>04</b> Témoignages</p>
        <h2 className="t-display text-4xl md:text-5xl lg:text-6xl mt-6 mb-14">
          Ce que disent <em>mes clients.</em>
        </h2>

        <div className="grid lg:grid-cols-[1.35fr_1fr] gap-10 lg:gap-16 items-start">
          <figure className="relative">
            <span className="font-display text-[9rem] leading-[0.6] text-[var(--terracotta)] block select-none" aria-hidden="true">
              &ldquo;
            </span>
            <blockquote className="font-display text-2xl md:text-[2.1rem] leading-snug font-light mt-2">
              {featured.text}
            </blockquote>
            <figcaption className="mt-8 flex flex-wrap items-center gap-6">
              <Author t={featured} />
              <Stars n={featured.rating} />
            </figcaption>
          </figure>

          <div className="space-y-5">
            {others.map((t) => (
              <figure key={t.name} className="bg-dark-card border border-border-color rounded-[22px] p-6">
                <Stars n={t.rating} />
                <blockquote className="mt-3 text-text-primary leading-relaxed">&ldquo;{t.text}&rdquo;</blockquote>
                <figcaption className="mt-5">
                  <Author t={t} />
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
