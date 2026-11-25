"use client";

import { useEffect, useRef, useState } from "react";
import { annotate } from "rough-notation";
import { logo, marquee, site, tools } from "@/lib/site";

type Mode = "work" | "hire";

const results = [
  { x: -40, y: -24, r: -4, big: "150", small: "customers from cold email" },
  { x: 40, y: -28, r: 3, big: "50+", small: "meetings on LinkedIn" },
  { x: 0, y: -27, r: -2, big: "140k", small: "search impressions, 28 days" },
];

// Tool logos spread on two arcs behind the photo, in --hero-u units.
const logoPops = marquee.map((key, i, all) => {
  const t = i / (all.length - 1);
  const ang = Math.PI * (1.02 + 0.96 * t);
  const rad = i % 2 ? 44 : 32;
  return {
    key,
    x: +(Math.cos(ang) * rad * 1.2).toFixed(1),
    y: +(Math.sin(ang) * rad * 0.9 + 2).toFixed(1),
    r: ((i % 5) - 2) * 4,
  };
});

/**
 * Ported from the Candio hero: a cutout photo in front of a disc, and a pill
 * whose "Work with me" side makes the stack and results pop out from behind.
 * Springs live in CSS (linear() curves matching the original Framer settings).
 */
export function Hero() {
  const [mode, setMode] = useState<Mode>("work");
  const [intro, setIntro] = useState(true);
  const nameRef = useRef<HTMLDivElement>(null);
  const finePointer = useRef(true);

  useEffect(() => {
    finePointer.current = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = window.setTimeout(() => setIntro(false), reduce ? 0 : 80);
    let cancelled = false;
    if (!reduce && nameRef.current) {
      const color =
        getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#E8461C";
      const el = nameRef.current;
      (document.fonts?.ready ?? Promise.resolve()).then(() => {
        window.setTimeout(() => {
          if (cancelled) return;
          annotate(el, {
            type: "bracket",
            brackets: ["left", "right"],
            strokeWidth: 5,
            color,
            animationDuration: 1000,
          }).show();
        }, 1000);
      });
    }
    return () => {
      cancelled = true;
      window.clearTimeout(t);
    };
  }, []);

  const go = (target: Mode, href: string) => {
    // On touch, the first tap plays the effect and the second one navigates.
    if (!finePointer.current && mode !== target) {
      setMode(target);
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const pills: { mode: Mode; label: string; href: string }[] = [
    { mode: "work", label: "See results", href: "#results" },
    { mode: "hire", label: "Work with me", href: "#contact" },
  ];

  let k = 0;
  return (
    <header
      className={`stage${mode === "hire" ? " hire" : ""}${intro ? " intro" : ""}`}
      id="top"
    >
      <div className="grid-bg" aria-hidden="true" />
      <div className="disc" aria-hidden="true" />
      <div className="burst" aria-hidden="true">
        {results.map((p) => (
          <div
            key={p.big}
            className="pop res"
            style={popStyle(p.x, p.y, p.r, k++)}
          >
            <b>{p.big}</b>
            <small>{p.small}</small>
          </div>
        ))}
        {logoPops.map((p) => (
          <div key={p.key} className="pop logo" style={popStyle(p.x, p.y, p.r, k++)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logo(tools[p.key].logo)} alt="" />
          </div>
        ))}
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="cut" src="/assets/manas-cutout.png" alt={site.name} width={632} height={700} />
      <section className="hello">
        <span className="hi">Hello!</span>
        <div className="name-block" ref={nameRef}>
          <h1>
            I&apos;m <span>{site.name}</span>
          </h1>
          <p className="role">Founding GTM engineer for B2B SaaS &amp; AI startups</p>
        </div>
      </section>
      <div className="sides">
        <div className="side">
          <span className="q" aria-hidden="true">
            &ldquo;
          </span>
          <p>
            Manas is extremely talented. He did a great job on this project and I intend to work with
            him in the future.
          </p>
        </div>
        <div className="side r">
          <span className="stars" aria-label="5 out of 5 stars">
            ★★★★★
          </span>
          <a href={site.upwork} target="_blank" rel="noopener">
            <span className="rated">
              Top Rated<span>+</span>
            </span>
            <br />
            <small>100% job success on Upwork</small>
          </a>
        </div>
      </div>
      <div className="pillbar" role="group" aria-label="Choose a path">
        {pills.map((p) => (
          <button
            key={p.mode}
            type="button"
            className={`opt${mode === p.mode ? " on" : ""}`}
            onPointerEnter={(e) => e.pointerType === "mouse" && setMode(p.mode)}
            onPointerLeave={(e) => e.pointerType === "mouse" && setMode("work")}
            onFocus={() => setMode(p.mode)}
            onBlur={() => setMode("work")}
            onClick={() => go(p.mode, p.href)}
          >
            {p.label} <span className="arw">↗</span>
          </button>
        ))}
      </div>
    </header>
  );
}

function popStyle(x: number, y: number, r: number, k: number): React.CSSProperties {
  return {
    ["--x" as string]: `calc(var(--hero-u) * ${x})`,
    ["--y" as string]: `calc(var(--hero-u) * ${y})`,
    ["--r" as string]: `${r}deg`,
    ["--k" as string]: k,
  };
}
