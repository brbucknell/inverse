import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/cinzel/400.css";

export const metadata: Metadata = {
  title: "The Anomaly",
  description: "A guide to the world of Asharla",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
