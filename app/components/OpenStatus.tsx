"use client";

import { useEffect, useState } from "react";
import { HOURS } from "../lib/store";

/* Live open/closed pill in America/New_York. Mounted-gated to avoid
   hydration mismatch. */
export default function OpenStatus({ className = "" }: { className?: string }) {
  const [state, setState] = useState<{ open: boolean; label: string } | null>(null);

  useEffect(() => {
    const compute = () => {
      const now = new Date(
        new Date().toLocaleString("en-US", { timeZone: "America/New_York" })
      );
      const dow = now.getDay(); // 0 = Sun
      const idx = dow === 0 ? 6 : dow - 1; // HOURS array is Mon..Sun
      const today = HOURS[idx];
      const h = now.getHours() + now.getMinutes() / 60;
      const open = h >= today.o && h < today.c;
      const closeH = Math.floor(today.c);
      const closeM = today.c % 1 ? "30" : "00";
      const ampm = closeH >= 12 ? "PM" : "AM";
      const disp = ((closeH + 11) % 12) + 1;
      setState({
        open,
        label: open ? `Open until ${disp}:${closeM} ${ampm}` : "Closed now",
      });
    };
    compute();
    const t = setInterval(compute, 60000);
    return () => clearInterval(t);
  }, []);

  if (!state) {
    return (
      <span
        suppressHydrationWarning
        className={`inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-ink-3 ${className}`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-ink-3" />
        Today
      </span>
    );
  }

  return (
    <span
      suppressHydrationWarning
      className={`inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] ${
        state.open ? "text-rust" : "text-ink-3"
      } ${className}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          state.open ? "bg-rust animate-pulse" : "bg-ink-3"
        }`}
      />
      {state.label}
    </span>
  );
}
