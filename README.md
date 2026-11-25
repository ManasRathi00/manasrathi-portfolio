# manasrathi-portfolio

Personal site of Manas Rathi, founding GTM engineer for B2B SaaS and AI startups.

Next.js (App Router), plain CSS, no UI framework. The hero is a port of the Candio hero:
a cutout photo in front of a disc, and a pill whose "Work with me" side makes the stack
and results pop out from behind. Springs are CSS `linear()` curves matching the original
Framer Motion settings.

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

## Deploy to Cloud Run (not done yet)

One-time setup, once the domain is bought:

```bash
gcloud projects create manasrathi-site --name="manasrathi site"
gcloud config set project manasrathi-site
gcloud billing projects link manasrathi-site --billing-account=YOUR_BILLING_ACCOUNT
gcloud services enable run.googleapis.com cloudbuild.googleapis.com artifactregistry.googleapis.com
gcloud artifacts repositories create web --repository-format=docker --location=asia-southeast1
```

Deploy (re-run for every release):

```bash
gcloud builds submit --config cloudbuild.yaml \
  --substitutions=_SITE_URL=https://manasrathi.com,_GA_ID=G-XXXXXXX,_GSC=token,_BOOKING=https://cal.com/you
```

Region is `asia-southeast1` (Singapore): close to UAE, Singapore and India, and it supports
Cloud Run domain mappings. Min instances is 0, so the site costs close to nothing at low traffic
(first request after idle has a short cold start).

Custom domain:

```bash
gcloud domains verify manasrathi.com
gcloud beta run domain-mappings create --service=manasrathi-portfolio --domain=manasrathi.com --region=asia-southeast1
```

Then add the DNS records it prints at your registrar. After the domain is live:
add the property in Search Console and Bing Webmaster Tools, and submit `/sitemap.xml`.
