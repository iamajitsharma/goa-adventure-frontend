import "@/styles/globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import "remixicon/fonts/remixicon.css";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import type { AppProps } from "next/app";
import { Poppins, Merriweather } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from "@/components/Layout";
import FAB from "@/components/FloatingActionButton/FAB";
import EmailLoginModal from "@/components/modals/EmailLoginModal";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
// import UserLayout from "@/components/User/UserLayout";

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
    <Provider store={store}>
      <ToastContainer
        theme="dark"
        position="bottom-right"
        autoClose={2000}
        closeOnClick
        pauseOnHover={false}
      />
      <FAB />
      <LoginModal />
      <RegisterModal />
      <EmailLoginModal />
      <Layout>
        <main className={`${poppins.variable} ${merrifont.variable} font-sans`}>
          <Component {...pageProps} />
        </main>
      </Layout>
    </Provider>
  );
}
