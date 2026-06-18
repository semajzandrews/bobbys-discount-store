import Image from "next/image";
import { NEEDS, STORE } from "../lib/store";

/* Full-height hero panel (locked lane). Signature: the "what are you
   looking for?" word-cycle resolving into "it's probably here." */
export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden border-b border-line"
    >
      {/* Right-side image panel */}
      <div className="absolute inset-y-0 right-0 hidden md:block md:w-[42%] lg:w-[46%]">
        <div className="img-frame h-full">
          <Image
            src="/img/shopper.jpg"
            alt="A shopper finding what she needs among packed shelves at Bobby's Discount Store in Orange, New Jersey"
            fill
            priority
            sizes="46vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-paper" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
        </div>
      </div>

      {/* Copy */}
      <div className="relative z-10 flex min-h-[100svh] flex-col justify-center px-6 pt-24 pb-16 sm:px-10 md:max-w-[58%] md:pt-16 lg:max-w-[56%] lg:px-16">
        <div className="reveal in">
          <span className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.26em] text-tan-3">
            <span className="h-1.5 w-1.5 rounded-full bg-tan" />
            Main Street · City of Orange, NJ
          </span>
        </div>

        <h1 className="reveal mt-7 font-display text-[clamp(2.6rem,8vw,5.4rem)] font-extrabold leading-[0.92] tracking-tight text-ink">
          If you need
          <br className="hidden sm:block" /> {/* word cycle line */}
          <span className="relative mt-2 flex h-[1.15em] items-baseline overflow-hidden text-tan-3">
            <span className="word-cycle relative inline-block w-full">
              {NEEDS.map((w, i) => (
                <span key={w} style={{ animationDelay: `${i * 2}s` }}>
                  {w}
                </span>
              ))}
            </span>
          </span>
          it&rsquo;s probably here.
        </h1>

        <p className="reveal mt-8 max-w-md text-[15px] leading-relaxed text-ink-2 sm:text-base">
          Bobby&rsquo;s is the neighborhood variety store that quietly stocks a
          little of everything. Home goods, cleaning supplies, bath and bedding,
          health and beauty, party and gifts, batteries and odds. One stop, honest
          prices, open seven days.
        </p>

        <div className="reveal mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#directory"
            className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-3.5 font-display text-sm font-semibold text-paper transition-colors hover:bg-tan-3"
          >
            Browse the aisles
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href={STORE.phoneHref}
            className="inline-flex items-center gap-2.5 rounded-full border border-line-2 px-6 py-3.5 font-display text-sm font-semibold text-ink transition-colors hover:border-tan hover:text-tan-3"
          >
            {STORE.phoneDisplay}
          </a>
        </div>

        <div className="reveal mt-12 flex items-center gap-7 text-ink-2">
          <div>
            <div className="font-display text-2xl font-bold text-ink tabnum">
              {STORE.rating}
              <span className="text-tan-3">★</span>
            </div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-ink-3">
              {STORE.reviews} Google reviews
            </div>
          </div>
          <span className="h-9 w-px bg-line-2" />
          <div>
            <div className="font-display text-2xl font-bold text-ink">7 days</div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-ink-3">
              a week, no membership
            </div>
          </div>
        </div>
      </div>

      {/* Mobile image strip below copy */}
      <div className="md:hidden relative h-56 w-full img-frame border-t border-line">
        <Image
          src="/img/shopper.jpg"
          alt="A shopper at Bobby's Discount Store, Orange NJ"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}
