import { Darker_Grotesque, Fraunces, Red_Hat_Display, IBM_Plex_Mono } from "next/font/google"

export const darkerGrotesque = Darker_Grotesque({ subsets: ["latin"], display: 'swap', variable: '--font-darker-grotesque' });
export const fraunces = Fraunces({ subsets: ["latin"], display: 'swap', variable: '--font-fraunces' });
export const redHatDisplay = Red_Hat_Display({ subsets: ["latin"], display: 'swap', variable: '--font-red-hat-display' });
export const ibmPlexMono = IBM_Plex_Mono({ subsets: ['latin'], display: 'swap', variable: '--font-ibm-plex-mono', weight: ['500', '600', '700'] });