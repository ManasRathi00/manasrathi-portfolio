import { site } from "@/lib/site";

/** Site nav and footer, shared by the homepage and the case study pages. */
export function SiteNav({ home = true }: { home?: boolean }) {
  const h = (id: string) => (home ? `#${id}` : `/#${id}`);
  return (
    <nav className="nav" id="nav">
      <div className="wrap">
        <a className="logo" href={home ? "#top" : "/"}>
          <span className="mark">MR</span>
          {site.name}
        </a>
        <div className="links">
          <a href={h("services")}>Services</a>
          <a href="/case-studies">Case studies</a>
          <a href={h("process")}>Process</a>
          <a href={h("stack")}>Stack</a>
          <a href={h("faq")}>FAQ</a>
        </div>
        <a className="btn btn-primary" href={site.bookingUrl || h("contact")}>
          Get a free teardown
        </a>
      </div>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <span>
          © {new Date().getFullYear()} {site.name} · Founding GTM engineer
        </span>
        <span>Bengaluru · {site.regions.join(" · ")}</span>
      </div>
    </footer>
  );
}

export function CaseCta() {
  return (
    <div className="cta" id="contact">
      <div className="wrap">
        <div className="cta-card rv">
          <div>
            <h2>Want numbers like these?</h2>
            <p>Send me who you sell to and I&apos;ll tell you how I&apos;d build the list. Free, 20 minutes.</p>
          </div>
          <div className="contact">
            {site.bookingUrl ? (
              <a className="cbtn primary" href={site.bookingUrl} target="_blank" rel="noopener">
                Book a call <small>20 minutes, free</small>
              </a>
            ) : (
              <a className="cbtn primary" href={`mailto:${site.email}`}>
                Email me <small>{site.email}</small>
              </a>
            )}
            <a className="cbtn" href={site.linkedin} target="_blank" rel="noopener">
              Message on LinkedIn <small>/in/manasrathii</small>
            </a>
            <a className="cbtn" href={site.upwork} target="_blank" rel="noopener">
              Hire on Upwork <small>Top Rated Plus</small>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
