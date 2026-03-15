import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Asusu — Stellar Financial Tracker",
  description:
    "Track your daily, monthly, and quarterly spending on the Stellar blockchain.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
