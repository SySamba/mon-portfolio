"use client";

interface GoogleFormProps {
  src: string;
  title?: string;
  height?: number;
}

export default function GoogleForm({
  src,
  title = "Formulaire",
  height = 800,
}: GoogleFormProps) {
  if (!src) {
    return (
      <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm">
        URL du formulaire Google manquante. Ajoutez-la dans <code className="font-mono">.env.local</code>.
      </div>
    );
  }

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-border-color bg-white">
      <iframe
        src={src}
        title={title}
        width="100%"
        height={height}
        className="w-full"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
      >
        Chargement…
      </iframe>
    </div>
  );
}
