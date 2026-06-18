import Image from "next/image";
import { AISLES } from "../lib/store";

const IMG: Record<string, { src: string; alt: string }> = {
  "01": { src: "/img/home-kitchen.jpg", alt: "Cookware and kitchen pots and pans" },
  "02": { src: "/img/cleaning.jpg", alt: "Household cleaning detergents and supplies" },
  "03": { src: "/img/bath-towels.jpg", alt: "A stack of folded bath towels" },
  "04": { src: "/img/beauty.jpg", alt: "Health and beauty products on store shelves" },
  "05": { src: "/img/party-gifts.jpg", alt: "A party celebration cake with a sparkler" },
  "06": { src: "/img/hardware.jpg", alt: "Shelves of household hardware and supplies" },
};

export default function Directory() {
  return (
    <section id="directory" className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <header className="reveal max-w-2xl">
        <span className="text-[11px] uppercase tracking-[0.26em] text-tan-3">
          01 — The Directory
        </span>
        <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3.4rem)] font-extrabold leading-[0.98] tracking-tight text-ink">
          Six aisles, a thousand
          <br className="hidden sm:block" /> little errands solved.
        </h2>
        <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-2">
          Bobby&rsquo;s is the kind of store where the run you were dreading turns
          into one quick stop. Here is the lay of the land before you walk in.
        </p>
      </header>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {AISLES.map((a, i) => {
          const img = IMG[a.no];
          return (
            <article
              key={a.no}
              className="tile reveal group flex flex-col overflow-hidden rounded-2xl border border-line bg-paper"
              style={{ transitionDelay: `${(i % 3) * 70}ms` }}
            >
              <div className="img-frame relative aspect-[4/3] w-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full bg-paper/90 px-2.5 py-1 font-display text-[11px] font-bold tabnum text-tan-3 backdrop-blur">
                  {a.no}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-xl font-bold tracking-tight text-ink">
                  {a.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-2">
                  {a.blurb}
                </p>
                <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5">
                  {a.items.map((it) => (
                    <li
                      key={it}
                      className="text-[11.5px] uppercase tracking-[0.1em] text-ink-3"
                    >
                      {it}
                      <span className="ml-3 text-tan-2">·</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>

      <p className="reveal mt-10 text-[13px] text-ink-3">
        And plenty more on the shelves. If you do not see it here, ask at the
        counter. There is a good chance it is in the back.
      </p>
    </section>
  );
}
