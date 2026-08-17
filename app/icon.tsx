import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "64px",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "4px",
        borderRadius: "16px",
        background: "#111210",
      }}
    >
      {[14, 27, 40, 27, 14].map((height, index) => (
        <span key={index} style={{ width: "4px", height: `${height}px`, borderRadius: "99px", background: index === 2 ? "#ff6846" : "#f4f4ef" }} />
      ))}
    </div>,
    size,
  );
}
