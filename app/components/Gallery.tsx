import Image from "next/image";

/* "Inside Bobby's" — an editorial strip of the real store texture. The packed
   aisle is the soul of a variety store, so it leads. */
export default function Gallery() {
  return (
    <section id="store" className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <header className="reveal max-w-2xl">
        <span className="text-[11px] uppercase tracking-[0.26em] text-tan-3">
          03 — Inside the store
        </span>
        <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3.4rem)] font-extrabold leading-[0.98] tracking-tight text-ink">
          Aisles worth wandering.
        </h2>
      </header>

      <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-12 lg:gap-5">
        <div className="reveal img-frame relative col-span-2 aspect-[16/10] overflow-hidden rounded-2xl border border-line lg:col-span-8 lg:aspect-[16/9]">
          <Image
            src="/img/hero-shelves.jpg"
            alt="Fully stocked shelves running down an aisle at Bobby's Discount Store in Orange, NJ"
            fill
            sizes="(max-width:1024px) 100vw, 66vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/55 to-transparent p-5">
            <p className="font-display text-sm font-semibold text-paper">
              Stocked floor to ceiling, all week long.
            </p>
          </div>
        </div>

        <div className="reveal img-frame relative aspect-square overflow-hidden rounded-2xl border border-line lg:col-span-4 lg:aspect-auto">
          <Image
            src="/img/party-gifts.jpg"
            alt="A celebration cake with a sparkler, from the party and gifts aisle"
            fill
            sizes="(max-width:1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>

        <div className="reveal img-frame relative aspect-square overflow-hidden rounded-2xl border border-line lg:col-span-4">
          <Image
            src="/img/cleaning.jpg"
            alt="Colorful household cleaning detergents"
            fill
            sizes="(max-width:1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>

        <div className="reveal img-frame relative aspect-square overflow-hidden rounded-2xl border border-line lg:col-span-4">
          <Image
            src="/img/bath-towels.jpg"
            alt="Folded bath towels from the bed and bath aisle"
            fill
            sizes="(max-width:1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>

        <div className="reveal img-frame relative aspect-square overflow-hidden rounded-2xl border border-line lg:col-span-4">
          <Image
            src="/img/home-kitchen.jpg"
            alt="Pots and pans from the home and kitchen aisle"
            fill
            sizes="(max-width:1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
