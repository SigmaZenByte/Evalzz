import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = site.meta.title;

/* Fetches the TTF build of Instrument Serif so the share card matches the
   site. If Google Fonts is unreachable the card still renders in next/og's
   default face — the build never fails on this. */
async function loadInstrumentSerif(): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch("https://fonts.googleapis.com/css2?family=Instrument+Serif").then(
      (response) => response.text(),
    );
    const url = css.match(/src:\s*url\((https:[^)]+)\)\s*format\('(?:truetype|opentype)'\)/)?.[1];
    if (!url) return null;
    return await fetch(url).then((response) => response.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function OpenGraphImage() {
  const serif = await loadInstrumentSerif();

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          background: "#F6F1E7",
          color: "#211D18",
          padding: "64px 72px",
          fontFamily: serif ? "Instrument Serif" : "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            letterSpacing: 1,
          }}
        >
          <span>
            Eval<span style={{ color: "#BF4B24" }}>zz</span>
          </span>
          <span style={{ color: "#8A7F70", fontSize: 18 }}>{site.meta.ogFooter}</span>
        </div>

        <div style={{ display: "flex", fontSize: 82, lineHeight: 1.02, letterSpacing: -1.5 }}>
          {site.meta.ogHeadline}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ display: "flex", width: 96, height: 4, background: "#BF4B24" }} />
          <span style={{ fontSize: 24, color: "#5F564B" }}>
            Governed agent orchestration for regulated enterprises
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: serif
        ? [{ name: "Instrument Serif", data: serif, style: "normal", weight: 400 }]
        : undefined,
    },
  );
}
