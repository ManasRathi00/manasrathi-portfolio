/* eslint-disable @next/next/no-img-element */
import { Hero } from "@/components/Hero";
import { CopyEmail, Effects } from "@/components/Effects";
import { faqs, logo, marquee, site, stackGroups, tools } from "@/lib/site";

const d = (i: number) => ({ ["--i" as string]: i }) as React.CSSProperties;

export default function Home() {
  return (
    <>
      <nav className="nav" id="nav">
        <div className="wrap">
          <a className="logo" href="#top">
            <span className="mark">MR</span>
            {site.name}
          </a>
          <div className="links">
            <a href="#services">Services</a>
            <a href="#results">Results</a>
            <a href="#process">Process</a>
            <a href="#stack">Stack</a>
            <a href="#faq">FAQ</a>
          </div>
          <a className="btn btn-primary" href="#contact">
            Get a free teardown
          </a>
        </div>
      </nav>

      <main>
        <Hero />

        <div className="hero-intro">
          <div className="wrap">
            <p className="rv">
              I set up how B2B startups get customers. Outbound that books meetings, search that gets you found
              on Google and ChatGPT, and analytics that shows which one brought the deal.
            </p>
            <div className="ctas rv" style={d(1)}>
              <a className="btn btn-accent" href={site.bookingUrl || "#contact"}>
                Get a free GTM teardown <span className="arr">→</span>
              </a>
              <a className="btn btn-line" href="#results">
                See results
              </a>
            </div>
            <div className="regions rv" style={d(2)}>
              <span>Working with founders in</span>
              {site.regions.map((r) => (
                <span key={r}>{r}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="marquee" aria-label="Tools I build with">
          <p>Built on the tools you already pay for, plus code where they fall short</p>
          <div className="track">
            <div className="row">
              {[...marquee, ...marquee].map((key, i) => (
                <span className="lg" key={i} aria-hidden={i >= marquee.length ? true : undefined}>
                  <i>
                    <img src={logo(tools[key].logo)} alt="" />
                  </i>
                  {tools[key].name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="stats">
          <div className="wrap">
            <div className="stat-grid rv">
              <div className="st">
                <b data-count="15" data-suffix="+">15+</b>
                <span>companies I&apos;ve run outbound for</span>
              </div>
              <div className="st">
                <b data-count="1" data-prefix="$" data-suffix="M+">$1M+</b>
                <span>in B2B revenue generated</span>
              </div>
              <div className="st">
                <b data-count="45" data-suffix="%">45%</b>
                <span>open rate across 7,000 cold prospects</span>
              </div>
              <div className="st">
                <b data-count="100" data-suffix="%">100%</b>
                <span>job success on Upwork, Top Rated Plus</span>
              </div>
            </div>
          </div>
        </div>

        <section id="services">
          <div className="wrap">
            <div className="head rv">
              <span className="kicker">What I set up</span>
              <h2>Three systems. One view of what&apos;s working.</h2>
              <p>
                Most agencies hand you a sequence and a reply count. You get a GTM setup you own, with every
                channel tracked to revenue.
              </p>
            </div>
            <div className="bento">
              <article className="card b-out rv">
                <span className="tagline">01 · Outbound</span>
                <h3>Meetings from people who need you this week</h3>
                <p>
                  Lists built from buying signals. Emails verified twice. Domains, inboxes and warmup set up
                  properly. Messages that read like a person wrote them.
                </p>
                <div className="ui">
                  <div className="step"><span className="d">Day 0</span><span className="s">Email · &quot;Saw you&apos;re hiring your first SDR&quot;</span><span className="st-ok">sent</span></div>
                  <div className="step"><span className="d">Day 2</span><span className="s">LinkedIn · connection + note</span><span className="st-ok">accepted</span></div>
                  <div className="step reply"><span className="d">Day 3</span><span className="s">Reply · &quot;Yes, send times for Thursday&quot;</span><span className="st-ok">meeting</span></div>
                  <div className="step"><span className="d">Day 6</span><span className="s">Email · follow-up</span><span className="st-wait">skipped</span></div>
                  <div className="ui-note">example sequence</div>
                </div>
              </article>
              <article className="card b-search rv" style={d(1)}>
                <span className="tagline">02 · Search</span>
                <h3>Found on Google. Named by ChatGPT.</h3>
                <p>
                  Search Console set up right, schema, sitemaps and pages built around the questions your buyers
                  type, so AI search cites you.
                </p>
                <div className="ui chart">
                  <div className="chart-top">
                    <div><small>Impressions</small><b>140k</b></div>
                    <div><small>Weekly visitors</small><b>600+</b></div>
                    <div><small>Window</small><b>28 days</b></div>
                  </div>
                  <svg viewBox="0 0 400 120" aria-label="Impressions rising over 28 days">
                    <defs>
                      <linearGradient id="ga" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0" stopColor="var(--accent)" stopOpacity=".25" />
                        <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <g stroke="var(--line)">
                      <line x1="0" y1="30" x2="400" y2="30" />
                      <line x1="0" y1="65" x2="400" y2="65" />
                      <line x1="0" y1="100" x2="400" y2="100" />
                    </g>
                    <path d="M0,104 C30,102 50,100 75,98 S120,96 140,90 S185,86 205,78 S245,70 265,58 S310,44 330,34 S375,20 400,14 L400,112 L0,112 Z" fill="url(#ga)" />
                    <path className="draw" d="M0,104 C30,102 50,100 75,98 S120,96 140,90 S185,86 205,78 S245,70 265,58 S310,44 330,34 S375,20 400,14" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                  <div className="ui-note">Cruxal, first month · real numbers, curve simplified</div>
                </div>
              </article>
              <article className="card b-ana rv">
                <span className="included">Included every time</span>
                <div className="ana">
                  <div style={{ display: "grid", gap: 12 }}>
                    <span className="tagline">03 · Analytics</span>
                    <h3>See which channel brought the deal</h3>
                    <p>
                      Your site, Search Console, outbound tools and CRM connected, so on Monday morning you can
                      see what&apos;s working and cut what isn&apos;t. It&apos;s how I build my own products.
                    </p>
                  </div>
                  <div className="tbl-wrap">
                    <table className="tbl">
                      <thead>
                        <tr><th>Source</th><th>Visits</th><th>Meetings</th><th>Pipeline</th></tr>
                      </thead>
                      <tbody>
                        {[
                          ["instantly", "Cold email", "412", "14", 58, "$84k"],
                          ["salesnav", "LinkedIn", "268", "11", 44, "$61k"],
                          ["searchconsole", "Google search", "1,930", "6", 26, "$32k"],
                          ["claude", "AI search", "740", "4", 18, "$22k"],
                        ].map(([key, label, visits, meetings, bar, pipe]) => (
                          <tr key={label as string}>
                            <td>
                              <span className="src">
                                <i><img src={logo(tools[key as string].logo)} alt="" /></i>
                                {label}
                              </span>
                            </td>
                            <td>{visits}</td>
                            <td>{meetings}</td>
                            <td className="barcell">
                              <span className="bar" style={{ width: bar as number }} />
                              {pipe}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="ui-note" style={{ padding: "8px 10px 2px" }}>example dashboard</div>
                  </div>
                </div>
              </article>
              <article className="card b-mini rv"><h3>Signals</h3><p>Funding, hiring, tool changes and competitor engagement decide who hears from you today.</p></article>
              <article className="card b-mini rv" style={d(1)}><h3>Deliverability</h3><p>Domains, mailboxes, SPF, DKIM, DMARC and warmup. Great copy from a dead inbox never lands.</p></article>
              <article className="card b-mini rv" style={d(2)}><h3>Custom code</h3><p>When Apollo or Clay can&apos;t get the data, I write the scraper or agent that can.</p></article>
            </div>
          </div>
        </section>

        <section className="results" id="results">
          <div className="wrap">
            <div className="head rv">
              <span className="kicker">Results</span>
              <h2>Numbers from real campaigns.</h2>
              <p>Clients stay anonymous unless they&apos;ve said otherwise.</p>
            </div>
            <div className="cases">
              <article className="case rv">
                <div className="big" data-count="150">150</div>
                <h3>paying customers from cold email</h3>
                <p>
                  A US financial data company selling API products to CEOs and founders. I ran it end to end:
                  lists from Apollo, qualified with Exa and custom AI, verified with Findymail and ZeroBounce,
                  first lines in Clay, sent from Instantly on domains I set up.
                </p>
                <div className="metrics"><span>7,000 prospects</span><span>45% open</span><span>2.5% reply</span><span>2.5 months</span></div>
              </article>
              <article className="case rv" style={d(1)}>
                <div className="big" data-count="50" data-suffix="+">50+</div>
                <h3>meetings booked on LinkedIn</h3>
                <p>
                  Outreach into financial media companies over two months, run on Gojiberry and my own browser
                  automation with human pacing.
                </p>
                <div className="metrics"><span>5-6% reply</span><span>2 months</span><span>2 accounts</span></div>
              </article>
              <article className="case rv">
                <div className="big">16<span style={{ fontSize: ".5em", opacity: 0.6 }}> / 200</span></div>
                <h3>replies after rewriting one line</h3>
                <p>
                  A client sending 1,000 emails a week for about 3 replies. We threw out the sequence and rewrote
                  the offer. Sent to 200 people.
                </p>
                <div className="metrics"><span>9 calls</span><span>3 deals</span><span>10 days</span></div>
              </article>
              <article className="case rv" style={d(1)}>
                <div className="big" data-count="140" data-suffix="k">140k</div>
                <h3>search impressions in 28 days</h3>
                <p>
                  Cruxal, my own product. Most traffic came from people asking ChatGPT why a stock moved. Five ICP
                  meetings in the first week of outbound too.
                </p>
                <div className="metrics"><span>600+ weekly visitors</span><span>AI search</span><span>Search Console</span></div>
              </article>
            </div>
          </div>
        </section>

        <section id="process">
          <div className="wrap">
            <div className="head rv">
              <span className="kicker">Process</span>
              <h2>Live in three weeks.</h2>
            </div>
            <div className="timeline">
              <span className="fill" aria-hidden="true" />
              {[
                ["Week 1", "Offer and ICP", "Who has the problem right now, and the one line that gets a reply."],
                ["Week 2", "Build", "Signals, lists, sequences, tracking, Search Console and CRM, wired together."],
                ["Week 3", "Launch and tune", "First campaigns go out. We watch the numbers and fix what isn't working."],
                ["After", "Yours to run", "You run it with the docs I leave, or I keep running it monthly."],
              ].map(([w, h, p], i) => (
                <div className="tl rv" style={d(i)} key={w}>
                  <span className="w">{w}</span>
                  <h3>{h}</h3>
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ paddingTop: 0 }}>
          <div className="wrap eng">
            <div className="head rv" style={{ marginBottom: 0 }}>
              <span className="kicker">Why an engineer</span>
              <h2>GTM systems break where software breaks.</h2>
              <p>
                Bad data, flaky integrations, nobody watching. Before GTM I built production AI for three US
                companies, and I build your setup the same way.
              </p>
              <div className="products">
                <a className="prod" href="https://cruxal.in" target="_blank" rel="noopener">Cruxal <small>market news</small></a>
                <a className="prod" href="https://wynda.io" target="_blank" rel="noopener">Wynda <small>job agent</small></a>
                <a className="prod" href="https://diora.ai" target="_blank" rel="noopener">Diora <small>people search</small></a>
              </div>
            </div>
            <div className="builds">
              <div className="build rv"><b>3,000</b><p>utility bills a month pulled by a bot I built, which recovers on its own when portals change. Under $0.30 a bill.</p></div>
              <div className="build rv" style={d(1)}><b>500+</b><p>live earnings calls transcribed at once on a real-time engine in Python and Go.</p></div>
              <div className="build rv" style={d(2)}><b>700+</b><p>people at a global bank on a risk platform whose backend I lead.</p></div>
            </div>
          </div>
        </section>

        <section id="stack" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="head center rv">
              <span className="kicker">Stack</span>
              <h2>The tools, and where each one fits.</h2>
            </div>
            <div className="stack-grid">
              {stackGroups.map((g, i) => (
                <div className="grp rv" style={d(i)} key={g.title}>
                  <h3>{g.title}</h3>
                  {g.tools.map((key) => (
                    <span className="tool" key={key}>
                      <i><img src={logo(tools[key].logo)} alt="" /></i>
                      {tools[key].name}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" style={{ paddingTop: 0 }}>
          <div className="wrap faq-grid">
            <div className="head rv" style={{ marginBottom: 0 }}>
              <span className="kicker">FAQ</span>
              <h2>Questions founders ask.</h2>
            </div>
            <div className="rv" style={d(1)}>
              {faqs.map((f, i) => (
                <details key={f.q} open={i === 0}>
                  <summary>
                    {f.q}
                    <span className="pm">+</span>
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <div className="cta" id="contact">
          <div className="wrap">
            <div className="cta-card rv">
              <div>
                <h2>Send me your outbound. I&apos;ll tell you what&apos;s broken.</h2>
                <p>Your sequence, your list, your site, whatever you have. Free, 20 minutes.</p>
              </div>
              <div className="contact">
                {site.bookingUrl ? (
                  <a className="cbtn primary" href={site.bookingUrl} target="_blank" rel="noopener">
                    Book a call <small>20 minutes, free</small>
                  </a>
                ) : null}
                <button className={`cbtn${site.bookingUrl ? "" : " primary"}`} id="copyEmail" type="button">
                  Email me <small id="emailText">{site.email}</small>
                </button>
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
      </main>

      <footer>
        <div className="wrap">
          <span>© {new Date().getFullYear()} {site.name} · Founding GTM engineer</span>
          <span>Bengaluru · {site.regions.join(" · ")}</span>
        </div>
      </footer>

      <Effects />
      <CopyEmail email={site.email} />
    </>
  );
}
