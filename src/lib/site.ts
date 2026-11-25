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

export const upworkStats = { jobSuccess: "100%", badge: "Top Rated Plus", earned: "$100K+", jobs: 19, hours: "5,242" };

// Real Upwork reviews, quoted exactly. Client names aren't public on Upwork, so each is tied to its job.
export const testimonials = [
  {
    quote:
      "Manas did excellent work for us on building a custom scraping solution. He goes above and beyond on his tasks to ensure everything works well, thank you!",
    job: "Setup personalisations in Clay",
    rating: "5.0",
  },
  {
    quote:
      "Delivered on time, provided great output - we would hire him again should we need data management assistance again.",
    job: "Automated data gathering with Apify for Japanese business listings",
    rating: "5.0",
  },
  {
    quote:
      "Manas is extremely talented. He did a great job on this project and I intend to work with him in the future.",
    job: "AI assisted web bot",
    rating: "5.0",
  },
];

export type CaseStudy = {
  slug: string;
  metric: string;
  metricLabel: string;
  industry: string;
  title: string;
  summary: string;
  client: string;
  link?: { href: string; label: string };
  problem: string[];
  built: { title: string; body: string }[];
  tools: string[];
  results: { value: string; label: string }[];
  duration: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "cold-email-financial-data-api",
    metric: "150",
    metricLabel: "paying customers",
    industry: "Financial data · Cold email",
    title: "150 paying customers from cold email for a US financial data company",
    summary: "Selling API products to CEOs and founders. 7,000 prospects, 45% open, 2.5% reply, in two and a half months.",
    client: "US financial data company (name kept private)",
    problem: [
      "The company sells market data through APIs. The people who buy are founders and CEOs building products on top of financial data, and they don't sit in one neat database filter.",
      "They needed a way to reach those founders directly, at volume, without burning their main domain.",
    ],
    built: [
      { title: "Lists", body: "Leads pulled from Apollo, then qualified with Exa and a custom AI step that checked whether each company actually builds on market data." },
      { title: "Verification", body: "Every address checked twice, with Findymail and ZeroBounce, so bounces stayed out of the picture." },
      { title: "Personalisation", body: "First lines written in Clay from what each company actually does, not a pasted company name." },
      { title: "Sending", body: "Separate sending domains and mailboxes, SPF, DKIM and DMARC, and warmup, all set up by me. Campaigns sent and tracked in Instantly." },
      { title: "Automation", body: "n8n and Make workflows to move replies and data where the team needed them." },
    ],
    tools: ["apollo", "exa", "findymail", "zerobounce", "clay", "instantly", "n8n", "make"],
    results: [
      { value: "7,000", label: "prospects reached" },
      { value: "45%", label: "open rate" },
      { value: "2.5%", label: "reply rate" },
      { value: "150", label: "paying customers" },
    ],
    duration: "2.5 months",
  },
  {
    slug: "linkedin-outreach-financial-media",
    metric: "50+",
    metricLabel: "meetings booked",
    industry: "Financial media · LinkedIn",
    title: "50+ meetings from LinkedIn outreach into financial media companies",
    summary: "Two months of LinkedIn outreach at a 5-6% reply rate, paced like a person so accounts stayed safe.",
    client: "Outreach into financial media companies",
    problem: [
      "Decision makers at financial media companies live on LinkedIn more than in their inbox.",
      "The outreach had to run every day across more than one account without getting flagged.",
    ],
    built: [
      { title: "Targeting", body: "Lists of the right people at financial media companies, built from LinkedIn data." },
      { title: "Sending", body: "Gojiberry plus my own browser automation, across two LinkedIn accounts." },
      { title: "Account safety", body: "Residential proxies and human-like pacing, so neither account got restricted." },
    ],
    tools: ["gojiberry", "salesnav", "playwright"],
    results: [
      { value: "50+", label: "meetings booked" },
      { value: "5-6%", label: "reply rate" },
      { value: "2", label: "LinkedIn accounts" },
    ],
    duration: "2 months",
  },
  {
    slug: "cruxal",
    metric: "140k",
    metricLabel: "search impressions",
    industry: "My own product · Outbound + AI search",
    title: "Cruxal: 5 ICP meetings in week one, then 140k search impressions in 28 days",
    summary: "Real-time news on Indian listed companies. Outbound got the first meetings, AI search brought the traffic.",
    client: "Cruxal, my own product",
    link: { href: "https://cruxal.in", label: "cruxal.in" },
    problem: [
      "Cruxal is a real-time news product for Indian listed companies. It processes 2,000+ regulatory filings a day.",
      "As a new product it needed two things fast: conversations with the exact people who'd pay, and a steady stream of traffic that didn't depend on ads.",
    ],
    built: [
      { title: "Outbound", body: "A focused outbound campaign aimed at the exact buyer. Five meetings with that ICP in the first week." },
      { title: "AI search", body: "Pages built around the questions people ask about stock moves, so ChatGPT started sending visitors when people asked why a company was up 10% today." },
      { title: "Measurement", body: "Search Console from the start, so it was clear which queries and sources the traffic came from." },
    ],
    tools: ["searchconsole", "claude"],
    results: [
      { value: "5", label: "ICP meetings in week one" },
      { value: "140k", label: "impressions in 28 days" },
      { value: "600+", label: "weekly visitors" },
    ],
    duration: "Under a month",
  },
];
