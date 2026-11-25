export const site = {
  name: "Manas Rathi",
  title: "Founding GTM engineer for B2B SaaS & AI startups",
  description:
    "Manas Rathi is a founding GTM engineer for B2B SaaS and AI startups. Outbound that books meetings, search that gets you found on Google and ChatGPT, and analytics that shows which one brought the deal.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://manasrathi.com").replace(/\/$/, ""),
  email: "manas.rathi2@gmail.com",
  linkedin: "https://www.linkedin.com/in/manasrathii",
  upwork: "https://www.upwork.com/freelancers/~01e032ce32a3beb12a",
  github: "https://github.com/ManasRathi00",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || "",
  regions: ["UAE", "Singapore", "India", "US"],
};

export type Tool = { name: string; logo: string };

export const tools: Record<string, Tool> = {
  apollo: { name: "Apollo", logo: "apollo.png" },
  salesnav: { name: "Sales Navigator", logo: "linkedin.png" },
  exa: { name: "Exa", logo: "exa.png" },
  apify: { name: "Apify", logo: "apify.png" },
  clay: { name: "Clay", logo: "clay.png" },
  findymail: { name: "Findymail", logo: "findymail.png" },
  zerobounce: { name: "ZeroBounce", logo: "zerobounce.png" },
  instantly: { name: "Instantly", logo: "instantly.png" },
  gojiberry: { name: "Gojiberry", logo: "gojiberry.png" },
  hubspot: { name: "HubSpot", logo: "hubspot.png" },
  n8n: { name: "n8n", logo: "n8n.svg" },
  make: { name: "Make", logo: "make.png" },
  claude: { name: "Claude Code", logo: "claude.png" },
  playwright: { name: "Playwright", logo: "playwright.png" },
  searchconsole: { name: "Search Console", logo: "searchconsole.svg" },
  analytics: { name: "Google Analytics", logo: "analytics.svg" },
  posthog: { name: "PostHog", logo: "posthog.png" },
};

export const marquee = [
  "apollo", "clay", "instantly", "gojiberry", "salesnav", "exa", "findymail", "zerobounce",
  "n8n", "make", "apify", "searchconsole", "analytics", "posthog", "hubspot", "claude", "playwright",
];

export const stackGroups: { title: string; tools: string[] }[] = [
  { title: "Find", tools: ["apollo", "salesnav", "exa", "apify"] },
  { title: "Enrich + verify", tools: ["clay", "findymail", "zerobounce"] },
  { title: "Send", tools: ["instantly", "gojiberry", "hubspot"] },
  { title: "Automate", tools: ["n8n", "make", "claude", "playwright"] },
  { title: "Measure", tools: ["searchconsole", "analytics", "posthog"] },
];

export const faqs = [
  {
    q: "What does a founding GTM engineer do?",
    a: "Sets up how you get customers before you hire a sales team. Outbound, search, analytics and the CRM, built as one system you own.",
  },
  {
    q: "Will LinkedIn automation get my account restricted?",
    a: "Not if volumes stay sane. I keep sends inside safe limits, pace them like a person and warm accounts up first.",
  },
  {
    q: "Do you write the messages?",
    a: "Yes. The offer and the first messages matter more than anything else in the setup.",
  },
  {
    q: "Who is this not for?",
    a: "Companies still looking for product-market fit, paid ads and DTC brands, or anyone who wants 10,000 emails a day.",
  },
  {
    q: "How much does it cost?",
    a: "A fixed price for the three-week build, then a monthly fee if I run it. I quote after a 20-minute call.",
  },
];

export const logo = (file: string) => `/assets/logos/${file}`;
