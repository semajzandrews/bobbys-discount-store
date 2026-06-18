"use client";

import { useEffect, useState } from "react";
import OpenStatus from "./OpenStatus";
import { STORE } from "../lib/store";

const LINKS = [
  { href: "#directory", label: "Directory", no: "01" },
  { href: "#why", label: "Why Bobby's", no: "02" },
  { href: "#store", label: "Inside", no: "03" },
  { href: "#visit", label: "Visit", no: "04" },
];

export default function Nav() {
  const [active, setActive] = useState<string>("#directory");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* ===== Desktop left rail (locked lane) ===== */}
      <aside className="hidden lg:flex fixed inset-y-0 left-0 z-40 w-[clamp(220px,17vw,288px)] flex-col justify-between border-r border-line bg-paper-2/70 backdrop-blur-sm px-8 py-9">
        <div>
          <a href="#top" className="block">
            <div className="font-display text-2xl font-extrabold leading-[0.95] tracking-tight text-ink">
              Bobby&rsquo;s
            </div>
            <div className="mt-1 text-[11px] uppercase tracking-[0.28em] text-tan-3">
              Discount Store
            </div>
          </a>
          <div className="rule-tan mt-7 w-12 !bg-tan" style={{ background: "var(--tan)" }} />

          <nav className="mt-9 flex flex-col gap-1">
            {LINKS.map((l) => {
              const on = active === l.href;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className="group flex items-baseline gap-3 py-2.5"
                >
                  <span
                    className={`tabnum text-[11px] transition-colors ${
                      on ? "text-tan-3" : "text-ink-3/60"
                    }`}
                  >
                    {l.no}
                  </span>
                  <span
                    className={`font-display text-[15px] font-medium transition-colors ${
                      on ? "text-ink" : "text-ink-2 group-hover:text-ink"
                    }`}
                  >
                    {l.label}
                  </span>
                  <span
                    className={`ml-auto h-px self-center bg-tan transition-all duration-500 ${
                      on ? "w-6 opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </a>
              );
            })}
          </nav>
        </div>

        <div className="space-y-4">
          <OpenStatus />
          <a
            href={STORE.phoneHref}
            className="block rounded-full bg-ink px-5 py-3 text-center font-display text-sm font-semibold text-paper transition-colors hover:bg-tan-3"
          >
            Call {STORE.phoneDisplay}
          </a>
          <p className="text-[11px] leading-relaxed text-ink-3">
            {STORE.street}
            <br />
            {STORE.city}, {STORE.state} {STORE.zip}
          </p>
        </div>
      </aside>

      {/* ===== Mobile top bar ===== */}
      <header className="lg:hidden fixed top-0 inset-x-0 z-40 flex items-center justify-between border-b border-line bg-paper/90 backdrop-blur px-5 py-3.5">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-lg font-extrabold tracking-tight text-ink">
            Bobby&rsquo;s
          </span>
          <span className="text-[9px] uppercase tracking-[0.24em] text-tan-3">
            Discount
          </span>
        </a>
        <div className="flex items-center gap-2">
          <OpenStatus className="hidden xs:inline-flex" />
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line-2 text-ink"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 h-[1.5px] w-4 bg-ink transition-all ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-[1.5px] w-4 bg-ink transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-[1.5px] w-4 bg-ink transition-all ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile sheet */}
      <div
        className={`lg:hidden fixed inset-0 z-30 bg-paper transition-all duration-400 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col justify-center px-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-4 border-b border-line py-5"
            >
              <span className="tabnum text-xs text-tan-3">{l.no}</span>
              <span className="font-display text-3xl font-bold text-ink">{l.label}</span>
            </a>
          ))}
          <a
            href={STORE.phoneHref}
            onClick={() => setOpen(false)}
            className="mt-10 rounded-full bg-ink px-6 py-4 text-center font-display text-base font-semibold text-paper"
          >
            Call {STORE.phoneDisplay}
          </a>
          <div className="mt-6">
            <OpenStatus />
          </div>
        </div>
      </div>
    </>
  );
}
