# manasrathi-portfolio

Personal site of Manas Rathi, founding GTM engineer for B2B SaaS and AI startups.

Next.js (App Router), plain CSS, no UI framework. The hero is a simple two-column layout (pitch left, photo and an Upwork review right).

## Run locally

```bash
pnpm install
pnpm dev
```

Copy `.env.example` to `.env.local` and fill in what you have. Every value is optional.

| Variable | What it does |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL, sitemap, schema |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 measurement ID |
| `NEXT_PUBLIC_GSC_VERIFICATION` | Search Console HTML-tag token |
| `NEXT_PUBLIC_BOOKING_URL` | Cal.com / Calendly link; shows a "Book a call" button |

## SEO built in

- `sitemap.xml`, `robots.txt` (AI crawlers explicitly allowed), `llms.txt`
- Person + ProfessionalService + FAQPage schema linked to LinkedIn, Upwork and GitHub
- Generated Open Graph image

## Deploy to Cloud Run

Runs as its own Cloud Run service (`manasrathi-portfolio`) in the existing `cruxal-502309`
project, next to Cruxal and Wynda: region `asia-south1`, image repo `web`.

```bash
gcloud builds submit --project cruxal-502309 --config cloudbuild.yaml \
  --substitutions=_SITE_URL=https://manasrathi.com,_GA_ID=G-XXXXXXX,_GSC=token,_BOOKING=https://cal.com/you
```

Min instances is 0, so the site costs close to nothing at low traffic (first request after
idle has a short cold start).

When the domain is live: point it at the service the same way the Cruxal and Wynda domains
are set up, redeploy with `_SITE_URL` set to the real domain, then add the property in
Search Console and Bing Webmaster Tools and submit `/sitemap.xml`.
