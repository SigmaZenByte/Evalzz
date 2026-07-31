import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/* Favicon: sienna tile, serif E. Generated at build — no asset to maintain. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          background: "#BF4B24",
          color: "#FFF7F2",
          fontFamily: "serif",
          fontSize: 23,
          lineHeight: 1,
        }}
      >
        E
      </div>
    ),
    size,
  );
}
