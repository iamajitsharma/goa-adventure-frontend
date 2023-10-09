import "@/styles/globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import "remixicon/fonts/remixicon.css";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import type { AppProps } from "next/app";
import { Poppins, Merriweather, Roboto } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "@/components/Layout";
import FAB from "@/components/FloatingActionButton/FAB";
import EmailLoginModal from "@/components/modals/EmailLoginModal";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "@/store/store";
import ImageGallery from "@/components/SingleProductPage/ImageGallery";
import ZohoLiveChat from "@/components/ZohoLiveChat";

// import UserLayout from "@/components/User/UserLayout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-roboto",
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
      <PersistGate loading={null} persistor={persistor}>
        <ToastContainer
          theme="dark"
          position="bottom-right"
          autoClose={2000}
          closeOnClick
          pauseOnHover={false}
        />
        <FAB />

        <ZohoLiveChat
          url="https://salesiq.zohopublic.in/widget"
          widgetCode="siq9075fbd094059a202172b5057bbb7fc2aaf1dba0a90af0e9f4aa284f6140d94d"
          position="bottomright"
          visible={"show"}
        />
        <LoginModal />
        <RegisterModal />
        <EmailLoginModal />
        <Layout>
          <main
            className={`${poppins.variable} ${merrifont.variable} ${roboto.variable} font-sans`}
          >
            <Component {...pageProps} />
          </main>
        </Layout>
      </PersistGate>
    </Provider>
  );
}
