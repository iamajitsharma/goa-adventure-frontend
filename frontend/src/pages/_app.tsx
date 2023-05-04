import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({
  weight: ["200", "300", "400", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-nunito",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${nunito.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
