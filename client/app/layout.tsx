//import node module libraries
import { Inter, Poppins, Roboto } from "next/font/google";
import "./globals.css";
import StoreProvider from "store/StoreProvider";
//import custom components
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import Modal from "components/modal/Modal";
import EnquiryForm from "components/common/EnquiryForm";
import { Metadata } from "next";

import { Toaster } from "react-hot-toast";
import ZohoLiveChat from "components/common/ZohoLiveChat";
import WhatsAppButton from "components/common/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: {
    default: "Goa Adventure",
    template: "%s - Goa Adventure",
  },
  description: "Book Goa Tour Package, Activity, Hotel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StoreProvider>
          <Header />
          {children}
          <Footer />
          <Toaster />
          <ZohoLiveChat />
        </StoreProvider>
        <WhatsAppButton />
      </body>
    </html>
  );
}
