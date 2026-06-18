import { HOURS, STORE } from "../lib/store";
import OpenStatus from "./OpenStatus";

const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  STORE.mapsQuery
)}&output=embed`;

export default function Visit() {
  return (
    <section
      id="visit"
      className="border-t border-line bg-paper-2 px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
    >
      <header className="reveal max-w-2xl">
        <span className="text-[11px] uppercase tracking-[0.26em] text-tan-3">
          04 — Visit
        </span>
        <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3.4rem)] font-extrabold leading-[0.98] tracking-tight text-ink">
          Find us on Main Street.
        </h2>
      </header>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
        {/* Hours + contact */}
        <div className="reveal">
          <div className="rounded-2xl border border-line bg-paper p-7 sm:p-8">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-bold tracking-tight text-ink">
                Store hours
              </h3>
              <OpenStatus />
            </div>
            <div className="rule-dot mt-5" />
            <ul className="mt-5 space-y-2.5">
              {HOURS.map((h) => (
                <li
                  key={h.day}
                  className="flex items-baseline justify-between text-[14px]"
                >
                  <span className="text-ink-2">{h.day}</span>
                  <span className="tabnum font-medium text-ink">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <a
              href={STORE.phoneHref}
              className="rounded-2xl border border-line bg-paper p-5 transition-colors hover:border-tan"
            >
              <div className="text-[11px] uppercase tracking-[0.18em] text-ink-3">
                Call
              </div>
              <div className="mt-1 font-display text-lg font-bold text-ink">
                {STORE.phoneDisplay}
              </div>
            </a>
            <a
              href={`https://www.google.com/maps?q=${encodeURIComponent(
                STORE.mapsQuery
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-line bg-paper p-5 transition-colors hover:border-tan"
            >
              <div className="text-[11px] uppercase tracking-[0.18em] text-ink-3">
                Address
              </div>
              <div className="mt-1 font-display text-[15px] font-bold leading-snug text-ink">
                {STORE.street}
                <br />
                {STORE.city}, {STORE.state} {STORE.zip}
              </div>
            </a>
          </div>
        </div>

        {/* Map */}
        <div className="reveal img-frame relative min-h-[320px] overflow-hidden rounded-2xl border border-line">
          <iframe
            title="Map to Bobby's Discount Store on Main Street, City of Orange, NJ"
            src={MAP_SRC}
            className="absolute inset-0 h-full w-full"
            style={{ border: 0, filter: "grayscale(0.15) contrast(1.02)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
