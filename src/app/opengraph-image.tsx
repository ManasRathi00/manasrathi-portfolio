import { ImageResponse } from "next/og";

export const alt = "Manas Rathi - Founding GTM engineer for B2B SaaS & AI startups";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#FAFAF8", padding: 72, fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 56, height: 56, borderRadius: 16, background: "#E8461C", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>MR</div>
          <div style={{ fontSize: 30, color: "#0B0B0C" }}>Manas Rathi</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, lineHeight: 1.02, letterSpacing: -3, color: "#0B0B0C" }}>Your founding</div>
          <div style={{ fontSize: 84, lineHeight: 1.02, letterSpacing: -3, color: "#E8461C" }}>GTM engineer.</div>
          <div style={{ fontSize: 30, color: "#64625D", marginTop: 24 }}>Outbound, search and analytics for B2B SaaS and AI startups</div>
        </div>
        <div style={{ display: "flex", gap: 40, fontSize: 26, color: "#0B0B0C" }}>
          <span>150 customers from cold email</span>
          <span>50+ LinkedIn meetings</span>
          <span>Top Rated Plus</span>
        </div>
      </div>
    ),
    size,
  );
}
