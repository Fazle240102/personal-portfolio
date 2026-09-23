import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Md. Fazle Rabbi | CSE Student & AI/ML Explorer",
  description:
    "Personal portfolio of Md. Fazle Rabbi — a Computer Science & Engineering undergraduate exploring AI/ML, software development, and practical systems.",
  keywords: [
    "Md. Fazle Rabbi",
    "Fazle Rabbi",
    "Computer Science",
    "CSE",
    "AI",
    "Machine Learning",
    "Software Development",
    "Daffodil International University",
  ],
  authors: [{ name: "Md. Fazle Rabbi" }],
  creator: "Md. Fazle Rabbi",

  openGraph: {
    title: "Md. Fazle Rabbi | CSE Student & AI/ML Explorer",
    description:
      "CSE undergraduate exploring AI/ML, software development, and practical systems.",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Md. Fazle Rabbi | CSE Student & AI/ML Explorer",
    description:
      "CSE undergraduate exploring AI/ML, software development, and practical systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
