import "@/styles/globals.css";
import "remixicon/fonts/remixicon.css";
import type { AppProps } from "next/app";
import { Poppins, Merriweather } from "next/font/google";

import Layout from "@/components/Layout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
});

const merrifont = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-merri",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <main className={`${poppins.variable} ${merrifont.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
