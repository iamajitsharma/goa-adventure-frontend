import Footer from "./footer/Footer";
import Header from "./Header/Header";
import { useRouter } from "next/router";

type LayoutProps = {
  children: React.ReactNode;
};

export const revalidate = 360;
export default function Layout({ children }: LayoutProps) {
  const router = useRouter();

  return (
    <>
      {/* <FAB />
        <LoginModal />
        <RegisterModal />
        <EmailLoginModal /> */}
      <Header />
      {children}
      <Footer />
    </>
  );
}
