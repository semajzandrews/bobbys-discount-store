import { Phone } from "lucide-react";
import { STORE } from "../lib/store";

/* Mobile-only fixed call affordance. Collapses to a ~46px icon button at
   the smallest widths so it never overflows 375px. Hidden on desktop where
   the left rail already carries the call CTA. */
export default function CallPill() {
  return (
    <a
      href={STORE.phoneHref}
      aria-label={`Call Bobby's Discount Store at ${STORE.phoneDisplay}`}
      className="lg:hidden fixed bottom-5 right-5 z-50 flex h-[46px] items-center gap-2 rounded-full bg-ink px-4 text-paper shadow-lg shadow-ink/20"
    >
      <Phone size={18} strokeWidth={2.2} />
      <span className="hidden sm:inline font-display text-sm font-semibold">Call</span>
    </a>
  );
}
