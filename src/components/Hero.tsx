import { site } from "@/lib/site";

const d = (i: number) => ({ ["--i" as string]: i }) as React.CSSProperties;

/** Simple two-column hero: pitch on the left, photo and one review on the right. */
export function Hero() {
  return (
    <header className="hero2" id="top">
      <div className="grid-bg" aria-hidden="true" />
      <div className="wrap">
        <div className="h2-copy">
          <a className="badge rv" href={site.upwork} target="_blank" rel="noopener">
            <span className="pill">100% JSS</span>Top Rated Plus on Upwork →
          </a>
          <h1 className="rv" style={d(1)}>
            Your founding <span className="hl">GTM engineer.</span>
          </h1>
          <p className="lede rv" style={d(2)}>
            I set up how B2B startups get customers. Outbound that books meetings, search that gets you found on
            Google and ChatGPT, and analytics that shows which one brought the deal.
          </p>
          <div className="ctas rv" style={d(3)}>
            <a className="btn btn-accent" href={site.bookingUrl || "#contact"}>
              Get a free GTM teardown <span className="arr">→</span>
            </a>
            <a className="btn btn-line" href="#results">
              See results
            </a>
          </div>
          <dl className="proof rv" style={d(4)}>
            <div><dt>150</dt><dd>customers from cold email</dd></div>
            <div><dt>50+</dt><dd>meetings on LinkedIn</dd></div>
            <div><dt>140k</dt><dd>search impressions in 28 days</dd></div>
          </dl>
        </div>

        <div className="h2-visual rv" style={d(2)}>
          <div className="h2-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/manas-cutout.png" alt={site.name} width={632} height={700} />
          </div>
          <figure className="h2-quote">
            <span className="stars" aria-label="5 out of 5 stars">★★★★★</span>
            <blockquote>
              &ldquo;Manas is extremely talented. He did a great job on this project and I intend to work with him in
              the future.&rdquo;
            </blockquote>
            <figcaption>Upwork client review</figcaption>
          </figure>
        </div>
      </div>
    </header>
  );
}
