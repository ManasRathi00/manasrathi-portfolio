import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { faqs, site } from "@/lib/site";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

const gaId = process.env.NEXT_PUBLIC_GA_ID;
const gscToken = process.env.NEXT_PUBLIC_GSC_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} - Founding GTM engineer for B2B SaaS & AI startups`,
  description:
    "Outbound for 15+ companies, $1M+ in B2B revenue. Outbound, search and analytics set up by an engineer. Free GTM teardown.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: `${site.name} - Founding GTM engineer`,
    description: "Outbound that books meetings, search that gets you cited by ChatGPT, and analytics that shows which one brought the deal.",
  },
  twitter: { card: "summary_large_image" },
  verification: gscToken ? { google: gscToken } : undefined,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF8" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0B" },
  ],
};

// Person + service + FAQ schema, so Google and AI search can tie the site to the LinkedIn and Upwork profiles.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      jobTitle: "Founding GTM Engineer",
      url: site.url,
      image: `${site.url}/assets/manas.jpg`,
      email: `mailto:${site.email}`,
      address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
      sameAs: [site.linkedin, site.upwork, site.github],
      knowsAbout: [
        "Go-to-market engineering",
        "Outbound sales",
        "Cold email deliverability",
        "LinkedIn outreach",
        "Clay",
        "Answer engine optimization",
        "Google Search Console",
        "Marketing attribution",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#service`,
      name: `${site.name} - GTM engineering`,
      url: site.url,
      provider: { "@id": `${site.url}/#person` },
      areaServed: ["AE", "SG", "IN", "US"],
      description: site.description,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "GTM services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Outbound engine" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO and AI search visibility" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Analytics and attribution" } },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
