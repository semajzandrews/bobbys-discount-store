import { STORE } from "../lib/store";
import OpenStatus from "./OpenStatus";

export default function Footer() {
  return (
    <footer className="bg-ink px-6 pt-16 pb-10 text-paper sm:px-10 lg:px-16">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="font-display text-3xl font-extrabold tracking-tight">
            Bobby&rsquo;s
            <span className="ml-2 text-[13px] font-medium uppercase tracking-[0.24em] text-tan align-middle">
              Discount Store
            </span>
          </div>
          <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-paper/65">
            The everything counter on Main Street. A little of everything, honest
            prices, open seven days in the City of Orange.
          </p>
          <div className="mt-5">
            <OpenStatus />
          </div>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-[0.22em] text-tan">
            Visit
          </div>
          <p className="mt-4 text-[14px] leading-relaxed text-paper/80">
            {STORE.street}
            <br />
            {STORE.city}, {STORE.state} {STORE.zip}
          </p>
          <a
            href={STORE.phoneHref}
            className="mt-3 inline-block font-display text-lg font-bold text-paper hover:text-tan"
          >
            {STORE.phoneDisplay}
          </a>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-[0.22em] text-tan">
            Hours
          </div>
          <ul className="mt-4 space-y-1 text-[13.5px] text-paper/80">
            <li className="flex justify-between gap-4">
              <span>Mon – Sat</span>
              <span className="tabnum">9:30 AM – 7:30 PM</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Sunday</span>
              <span className="tabnum">10:30 AM – 6:00 PM</span>
            </li>
          </ul>
          <a
            href={STORE.phoneHref}
            className="mt-6 inline-flex rounded-full bg-tan px-6 py-3 font-display text-sm font-semibold text-ink transition-colors hover:bg-paper"
          >
            Call the store
          </a>
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-4 border-t border-paper/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[12px] text-paper/50">
          © {new Date().getFullYear()} Bobby&rsquo;s Discount Store · City of
          Orange, NJ
        </p>
        <a
          href="https://bysemaj.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-[12px] text-paper/55 transition-colors hover:text-tan"
        >
          <span className="h-1 w-1 rounded-full bg-tan" />
          Built by
          <span className="font-display font-semibold text-paper/80 group-hover:text-tan">
            bysemaj.com
          </span>
        </a>
      </div>
    </footer>
  );
}
