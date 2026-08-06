import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-5 text-center">
      <h1 className="text-7xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-accent to-[#8b5cf6] bg-clip-text text-transparent">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Page introuvable</h2>
      <p className="text-text-secondary mb-8 max-w-md">
        La page que vous recherchez n&apos;existe pas ou a été déplacée.
      </p>
      <Link href="/" className="btn-primary">
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
