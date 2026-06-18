const POINTS = [
  {
    no: "01",
    title: "You actually find it",
    body: "Regulars say it best. When they need something, this is the first place they go and they almost always walk out with it.",
  },
  {
    no: "02",
    title: "Help that knows the shelves",
    body: "Ask anyone working the floor and they will point you straight to it. Friendly, fast, no wandering.",
  },
  {
    no: "03",
    title: "Honest discount prices",
    body: "The everyday basics for a home priced so you are not making a special trip to a big box across town.",
  },
  {
    no: "04",
    title: "Right on Main Street",
    body: "Steps from the bus and the heart of the City of Orange. Open early, open late, open all week.",
  },
];

export default function Why() {
  return (
    <section
      id="why"
      className="border-y border-line bg-ink px-6 py-20 text-paper sm:px-10 lg:px-16 lg:py-28"
    >
      <header className="reveal max-w-2xl">
        <span className="text-[11px] uppercase tracking-[0.26em] text-tan">
          02 — Why Bobby&rsquo;s
        </span>
        <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3.4rem)] font-extrabold leading-[1.0] tracking-tight">
          A small store that
          <br className="hidden sm:block" /> punches above its block.
        </h2>
      </header>

      <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
        {POINTS.map((p, i) => (
          <div
            key={p.no}
            className="reveal flex gap-5 border-t border-paper/15 pt-7"
            style={{ transitionDelay: `${(i % 2) * 90}ms` }}
          >
            <span className="font-display text-sm font-bold tabnum text-tan">
              {p.no}
            </span>
            <div>
              <h3 className="font-display text-xl font-bold tracking-tight">
                {p.title}
              </h3>
              <p className="mt-2.5 max-w-sm text-[14.5px] leading-relaxed text-paper/70">
                {p.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      <figure className="reveal mt-16 max-w-2xl border-l-2 border-tan pl-6">
        <blockquote className="font-display text-[clamp(1.25rem,3vw,1.9rem)] font-medium leading-snug">
          &ldquo;When I need certain things, this is the first place I go to and
          almost always find what I need.&rdquo;
        </blockquote>
        <figcaption className="mt-4 text-[12px] uppercase tracking-[0.18em] text-tan">
          Google review
        </figcaption>
      </figure>
    </section>
  );
}
