const ITEMS = [
  "Batteries",
  "Bed sheets",
  "Brooms",
  "Phone chargers",
  "Storage bins",
  "Detergent",
  "Towels",
  "Party balloons",
  "Light bulbs",
  "Cookware",
  "Gift wrap",
  "First aid",
  "Extension cords",
  "Trash bags",
  "Greeting cards",
  "Hair care",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <section
      aria-hidden
      className="overflow-hidden border-b border-line bg-paper-2 py-4"
    >
      <div className="marquee-track">
        {row.map((t, i) => (
          <span
            key={i}
            className="mx-5 inline-flex items-center gap-5 font-display text-sm font-medium uppercase tracking-[0.14em] text-ink-2"
          >
            {t}
            <span className="text-tan-3">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
