import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    <div
      style={{
        background: "#F7F3EC",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "2px solid #111111",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: [
            "linear-gradient(to right, #11111108 1px, transparent 1px)",
            "linear-gradient(to bottom, #11111108 1px, transparent 1px)",
          ].join(","),
          backgroundSize: "64px 64px",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            fontSize: "80px",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>BUILD.</span>
          <span>EXPLAIN.</span>
          <span>EVOLVE.</span>
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "#6B645D",
            fontWeight: 600,
          }}
        >
          Khalif Fatturrozy — Product Engineer
        </div>
      </div>
    </div>,
    { width: 1200, height: 630 }
  );
}
