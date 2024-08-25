import type { Metadata } from "next";
import "./globals.css";
import { darkerGrotesque, fraunces, redHatDisplay } from "./fonts";

export const metadata: Metadata = {
  title: "gally",
  description: "Antonio Gally",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className={`${darkerGrotesque.variable} ${fraunces.variable} ${redHatDisplay.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
