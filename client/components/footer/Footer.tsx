import Container from "components/UI/Container";
import ContactInfo from "./ContactInfo";
import SocialFollow from "./SocialFollow";
import QuickLinks from "./QuickLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="block bg-slate-100 min-h-full relative pb-0 mb-0">
      <div className="mx-auto w-full max-w-screen-xl h-full p-4 py-6 lg:py-8">
        <div className="md:max-w-7xl mx-auto pt-1 grid md:grid-cols-3 grid-col-1 gap-8 p-4 min-h-fit">
          <SocialFollow />
          <QuickLinks />
          <ContactInfo />
        </div>
      </div>
      <div
        className="
        absolute
        left-0
        top-full
        w-full
        h-20
        bg-slate-700
        flex
        items-center
        py-2
      text-gray-300
        text-sm
        font-light
        px-4
        bottom-0
      "
      >
        <span className="text-xs md:text-sm">
          Copyright {currentYear} All Rights Reserved | Safar Travel Express
        </span>
      </div>
    </footer>
  );
};

export default Footer;
