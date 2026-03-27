import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Donald Gera — AI Systems & Machine Learning",
  description:
    "MSc Computer Engineering student at the University of Trento, specializing in Artificial Intelligent Systems. Research in computer vision, deep learning, and NLP.",
  keywords: [
    "Donald Gera",
    "Machine Learning",
    "Computer Vision",
    "AI",
    "Deep Learning",
    "NLP",
    "Portfolio",
  ],
  authors: [{ name: "Donald Gera" }],
  openGraph: {
    title: "Donald Gera — AI Systems & Machine Learning",
    description:
      "MSc Computer Engineering student specializing in AI Systems. Research in computer vision, deep learning, and NLP.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Donald Gera — AI Systems & Machine Learning",
    description:
      "MSc Computer Engineering student specializing in AI Systems. Research in computer vision, deep learning, and NLP.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
