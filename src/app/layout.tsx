import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/providers/SmoothScrolling";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pragati Patil | Product Thinker & UX Designer",
  description: "Award-winning interactive resume of Pragati Patil. Blending design, business, and technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
