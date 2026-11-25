import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseCta, SiteFooter, SiteNav } from "@/components/Chrome";
import { Effects } from "@/components/Effects";
import { caseStudies, logo, site, tools } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = caseStudies.find((x) => x.slug === slug);
  if (!c) return {};
  return {
    title: `${c.title} - ${site.name}`,
    description: c.summary,
    alternates: { canonical: `/case-studies/${c.slug}` },
  };
}

const d = (i: number) => ({ ["--i" as string]: i }) as React.CSSProperties;

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const c = caseStudies.find((x) => x.slug === slug);
  if (!c) notFound();
  const others = caseStudies.filter((x) => x.slug !== c.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.title,
    description: c.summary,
    author: { "@type": "Person", name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/case-studies/${c.slug}`,
  };

  return (
    <>
      <SiteNav home={false} />
      <main>
        <article className="cs-page">
          <div className="wrap">
            <a className="cs-back rv" href="/case-studies">← All case studies</a>
            <span className="kicker rv" style={d(1)}>{c.industry}</span>
            <h1 className="cs-title rv" style={d(1)}>{c.title}</h1>
            <p className="cs-lede rv" style={d(2)}>{c.summary}</p>
            <div className="cs-meta rv" style={d(2)}>
              <span>{c.client}</span>
              <span>{c.duration}</span>
              {c.link ? (
                <a href={c.link.href} target="_blank" rel="noopener">
                  {c.link.label} ↗
                </a>
              ) : null}
            </div>

            <div className="cs-results rv" style={d(3)}>
              {c.results.map((r) => (
                <div key={r.label}>
                  <b>{r.value}</b>
                  <span>{r.label}</span>
                </div>
              ))}
            </div>

            <div className="cs-body">
              <section className="rv">
                <h2>The problem</h2>
                {c.problem.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </section>
              <section className="rv">
                <h2>What I built</h2>
                <div className="cs-steps">
                  {c.built.map((b) => (
                    <div key={b.title}>
                      <h3>{b.title}</h3>
                      <p>{b.body}</p>
                    </div>
                  ))}
                </div>
              </section>
              <section className="rv">
                <h2>Stack</h2>
                <div className="cs-stack">
                  {c.tools.map((t) => (
                    <span className="tool" key={t}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <i><img src={logo(tools[t].logo)} alt="" /></i>
                      {tools[t].name}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            <div className="cs-others">
              <h2 className="rv">More case studies</h2>
              <div className="cs-grid">
                {others.map((o, i) => (
                  <a className="cs-card rv" style={d(i)} href={`/case-studies/${o.slug}`} key={o.slug}>
                    <span className="cs-industry">{o.industry}</span>
                    <div className="cs-metric">
                      {o.metric}
                      <small>{o.metricLabel}</small>
                    </div>
                    <h2>{o.title}</h2>
                    <span className="case-link">Read →</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </article>
        <CaseCta />
      </main>
      <SiteFooter />
      <Effects />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
