"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import { StyledComponentsRegistry } from "@/lib/StyledComponentsRegistry";
import { GlobalStyles } from "@/lib/GlobalStyles";
import { GrauityThemeProvider } from "@newtonschool/grauity";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style>
          @import
          url("https://fonts.googleapis.com/css2?family=Mona+Sans:ital,wght@0,200..900;1,200..900&display=swap");
        </style>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <GlobalStyles />
        <StyledComponentsRegistry>
          <GrauityThemeProvider>{children}</GrauityThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
