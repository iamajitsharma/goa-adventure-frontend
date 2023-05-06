import { footerNavigation } from "./FooterLinks";
import SafarFooter from "./SafarFooter";
import FooterSocials from "./FooterSocials";

const Footer = () => {
  return (
    <section className="w-full h-screen relative bg-slate-700 font-poppins">
      <div className="grid grid-cols-4 md:max-w-7xl px-4 mx-auto pt-8">
        <SafarFooter />
        <SafarFooter />
        <SafarFooter />
        <FooterSocials />
      </div>
    </section>
  );
};

export default Footer;
