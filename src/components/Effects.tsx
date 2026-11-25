"use client";

import { useEffect } from "react";

/** Nav background on scroll, scroll reveals, count-ups and line draws. */
export function Effects() {
  useEffect(() => {
    const nav = document.getElementById("nav");
    const onScroll = () => nav?.classList.toggle("scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      return () => window.removeEventListener("scroll", onScroll);
    }
    document.documentElement.classList.add("anim");

    const count = (el: HTMLElement) => {
      const end = parseFloat(el.dataset.count || "0");
      const pre = el.dataset.prefix || "";
      const suf = el.dataset.suffix || "";
      const dur = 1400;
      let t0: number | null = null;
      const step = (ts: number) => {
        if (t0 === null) t0 = ts;
        const p = Math.min((ts - t0) / dur, 1);
        const e = 1 - Math.pow(1 - p, 3);
        el.textContent = pre + Math.round(end * e).toLocaleString() + suf;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      window.setTimeout(() => (el.textContent = pre + end.toLocaleString() + suf), dur + 400);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          const el = en.target as HTMLElement;
          el.classList.add("in");
          io.unobserve(el);
          el.querySelectorAll<HTMLElement>("[data-count]").forEach(count);
          if (el.matches("[data-count]")) count(el);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" },
    );
    const targets = document.querySelectorAll(".rv, .fill, .draw");
    targets.forEach((el) => io.observe(el));
    const safety = window.setTimeout(() => {
      document.querySelectorAll(".rv:not(.in), .fill:not(.in), .draw:not(.in)").forEach((el) => el.classList.add("in"));
    }, 4000);

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
      window.clearTimeout(safety);
    };
  }, []);
  return null;
}

/** Email button that copies the address, falling back to selecting it. */
export function CopyEmail({ email }: { email: string }) {
  useEffect(() => {
    const b = document.getElementById("copyEmail");
    const t = document.getElementById("emailText");
    if (!b || !t) return;
    const onClick = () => {
      const ok = () => {
        t.textContent = "Copied";
        window.setTimeout(() => (t.textContent = email), 1600);
      };
      const fb = () => {
        const r = document.createRange();
        r.selectNodeContents(t);
        const s = window.getSelection();
        s?.removeAllRanges();
        s?.addRange(r);
      };
      navigator.clipboard?.writeText(email).then(ok, fb) ?? fb();
    };
    b.addEventListener("click", onClick);
    return () => b.removeEventListener("click", onClick);
  }, [email]);
  return null;
}
