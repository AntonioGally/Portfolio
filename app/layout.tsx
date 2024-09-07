import type { Metadata } from "next";
import "./globals.css";
import { darkerGrotesque, fraunces, ibmPlexMono, redHatDisplay } from "./fonts";
import Script from "next/script";

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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-ZPXBMX5697"></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-ZPXBMX5697');
          `}
        </Script>
      </head>
      <body className={`${darkerGrotesque.variable} ${fraunces.variable} ${redHatDisplay.variable} ${ibmPlexMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
