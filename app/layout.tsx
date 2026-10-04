import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "حديث يومي من الأربعين النووية",
  description: "صور يومية من الأربعين النووية.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ margin: 0, background: "#f6f1e7" }}>{children}</body>
    </html>
  );
}
