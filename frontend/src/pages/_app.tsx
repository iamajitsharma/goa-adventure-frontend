import "@/styles/globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import "remixicon/fonts/remixicon.css";
import "react-datepicker/dist/react-datepicker.css";
import type { AppProps } from "next/app";
import { Poppins, Merriweather, Roboto } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "@/components/Layout";
import FAB from "@/components/FloatingActionButton/FAB";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "@/components/Responsive";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "@/store/store";
import ImageGallery from "@/components/SingleProductPage/ImageGallery";
import ZohoLiveChat from "@/components/ZohoLiveChat";
import ForgetPWDModal from "@/components/modals/ForgetPWDModal";
import EmailOTPModal from "@/components/modals/EmailOTPModal";

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
  const isMobile = useMediaQuery({ maxWidth: deviceSize.tablet });

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
        <ZohoLiveChat
          url="https://salesiq.zohopublic.in/widget"
          widgetCode="siq9075fbd094059a202172b5057bbb7fc2aaf1dba0a90af0e9f4aa284f6140d94d"
          position={isMobile ? "right" : "bottomright"}
          visible={"hide"}
        />
        <FAB />

        <LoginModal />
        <RegisterModal />
        <ForgetPWDModal />
        <EmailOTPModal />

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
