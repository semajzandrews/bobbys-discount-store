/* Single source of verified business facts. Recon-confirmed 06-15-2026.
   Google: 4.1 stars / 79 reviews. No existing website. */

export const STORE = {
  name: "Bobby's Discount Store",
  shortName: "Bobby's",
  street: "279-281 Main St",
  city: "City of Orange",
  state: "NJ",
  zip: "07050",
  phoneDisplay: "(973) 677-9777",
  phoneHref: "tel:+19736779777",
  rating: "4.1",
  reviews: "79",
  mapsQuery: "Bobby's Discount Store, 279 Main St, City of Orange, NJ 07050",
} as const;

export const HOURS: { day: string; time: string; o: number; c: number }[] = [
  { day: "Monday", time: "9:30 AM – 7:30 PM", o: 9.5, c: 19.5 },
  { day: "Tuesday", time: "9:30 AM – 7:30 PM", o: 9.5, c: 19.5 },
  { day: "Wednesday", time: "9:30 AM – 7:30 PM", o: 9.5, c: 19.5 },
  { day: "Thursday", time: "9:30 AM – 7:30 PM", o: 9.5, c: 19.5 },
  { day: "Friday", time: "9:30 AM – 7:30 PM", o: 9.5, c: 19.5 },
  { day: "Saturday", time: "9:30 AM – 7:30 PM", o: 9.5, c: 19.5 },
  { day: "Sunday", time: "10:30 AM – 6:00 PM", o: 10.5, c: 18 },
];

/* What a Main Street variety store actually carries, per reviews
   ("wide variety of items for most housing needs") and category. */
export const AISLES = [
  {
    no: "01",
    title: "Home & Kitchen",
    blurb: "Cookware, storage, small appliances, and the everyday pieces that keep a home running.",
    items: ["Pots & pans", "Food storage", "Dish sets", "Small appliances"],
  },
  {
    no: "02",
    title: "Cleaning & Laundry",
    blurb: "Detergents, mops, brooms, sponges, and every supply for a fresh apartment.",
    items: ["Detergent", "Mops & brooms", "Trash bags", "Sponges"],
  },
  {
    no: "03",
    title: "Bed & Bath",
    blurb: "Sheets, towels, curtains, and the soft goods that finish a room.",
    items: ["Sheet sets", "Towels", "Curtains", "Bath mats"],
  },
  {
    no: "04",
    title: "Health & Beauty",
    blurb: "Daily care, grooming basics, and the toiletries you forgot to grab.",
    items: ["Toiletries", "Hair care", "First aid", "Personal care"],
  },
  {
    no: "05",
    title: "Toys, Party & Gifts",
    blurb: "Birthday balloons, wrapping, toys, and last-minute gifts down the block.",
    items: ["Party supplies", "Toys", "Gift wrap", "Greeting cards"],
  },
  {
    no: "06",
    title: "Hardware & Odds",
    blurb: "Batteries, extension cords, tools, and the little fix-it things you always run out of.",
    items: ["Batteries", "Extension cords", "Hand tools", "Light bulbs"],
  },
] as const;

/* Hero word-cycle: the "what are you looking for?" rotation. */
export const NEEDS = [
  "a phone charger",
  "fresh towels",
  "cleaning supplies",
  "party balloons",
  "AA batteries",
  "a new broom",
  "storage bins",
  "school stuff",
];
