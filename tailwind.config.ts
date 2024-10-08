import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        darkerGrotesque: ['var(--font-darker-grotesque)'],
        redHatDisplay: ['var(--font-red-hat-display)'],
        fraunces: ['var(--font-fraunces)'],
        ibmPlexMono: ['var(--font-ibm-plex-mono)'],
        sans: ['var(--font-darker-grotesque)']
      }
    },
  },
  plugins: [],
};
export default config;
