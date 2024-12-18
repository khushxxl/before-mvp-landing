import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  weight: ["300"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const poppins_extrabold = Poppins({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-poppins-extrabold",
});

const poppins_bold = Poppins({
  weight: ["500"],
  subsets: ["latin"],
  variable: "--font-poppins-bold",
});

export const metadata: Metadata = {
  title: "Before MVP- Research Before You Code",
  description:
    "We help you research and validate your business idea before writing any code. Save time and resources by validating your concept first.",
  openGraph: {
    type: "website",
    url: "https://before-mvp-landing.vercel.app/",
    title: "Before MVP - Research Before You Code",
    description:
      "We help you research and validate your business idea before writing any code. Save time and resources by validating your concept first.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Before MVP - Research Before You Code",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://before-mvp-landing.vercel.app/",
    title: "Before MVP - Research Before You Code",
    description:
      "We help you research and validate your business idea before writing any code. Save time and resources by validating your concept first.",
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:site"
          content="https://before-mvp-landing.vercel.app/"
        />
        <meta
          name="twitter:title"
          content="Before MVP - Research Before You Code"
        />
        <meta
          name="twitter:description"
          content="We help you research and validate your business idea before writing any code. Save time and resources by validating your concept first."
        />
        <meta name="twitter:image" content="/opengraph-image.png" />
      </Head>
      <body
        className={`${poppins.variable} ${poppins_extrabold.variable} ${poppins_bold.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
