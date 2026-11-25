import type { Metadata } from "next";
import { CaseCta, SiteFooter, SiteNav } from "@/components/Chrome";
import { Effects } from "@/components/Effects";
import { caseStudies, logo, site, tools } from "@/lib/site";

export const metadata: Metadata = {
  title: `Case studies - ${site.name}`,
  description:
    "Real outbound and AI search results: 150 paying customers from cold email, 50+ LinkedIn meetings, 140k search impressions in 28 days.",
  alternates: { canonical: "/case-studies" },
};

const d = (i: number) => ({ ["--i" as string]: i }) as React.CSSProperties;

export default function CaseStudies() {
  return (
    <>
      <SiteNav home={false} />
      <main>
        <section className="cs-index">
          <div className="wrap">
            <div className="head rv">
              <span className="kicker">Case studies</span>
              <h1 className="cs-h1">What happens when outbound is built properly.</h1>
              <p>
                Real numbers from campaigns I ran end to end. Clients stay anonymous unless they&apos;ve said
                otherwise.
              </p>
            </div>
            <div className="cs-grid">
              {caseStudies.map((c, i) => (
                <a className="cs-card rv" style={d(i)} href={`/case-studies/${c.slug}`} key={c.slug}>
                  <span className="cs-industry">{c.industry}</span>
                  <div className="cs-metric">
                    {c.metric}
                    <small>{c.metricLabel}</small>
                  </div>
                  <h2>{c.title}</h2>
                  <p>{c.summary}</p>
                  <div className="cs-tools">
                    {c.tools.slice(0, 5).map((t) => (
                      <i key={t} title={tools[t].name}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={logo(tools[t].logo)} alt={tools[t].name} />
                      </i>
                    ))}
                  </div>
                  <span className="case-link">Read the case study →</span>
                </a>
              ))}
            </div>
            <p className="cs-more rv">
              I&apos;ve run outbound for other B2B clients too. More write-ups go up here as clients sign off on them.
            </p>
          </div>
        </section>
        <CaseCta />
      </main>
      <SiteFooter />
      <Effects />
    </>
  );
}
