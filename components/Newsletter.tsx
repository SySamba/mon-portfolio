export default function Newsletter() {
  return (
    <form
      action="https://formspree.io/f/xojgbljz"
      method="POST"
      className="flex flex-col sm:flex-row gap-3"
    >
      <input
        type="email"
        name="email"
        placeholder="Votre adresse email"
        required
        className="flex-1 bg-dark-card border border-border-color rounded-full px-5 py-3 text-text-primary focus:outline-none focus:border-accent"
      />
      <button type="submit" className="btn-primary whitespace-nowrap">
        S'abonner
      </button>
    </form>
  );
}
