import { footerNavigation } from "./FooterLinks";
import SafarFooter from "./SafarFooter";
import CompanyDetails from "./CompanyDetails";
import FooterSubscribe from "./FooterSubscribe";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="w-full relative bg-gray-100 shadow-md font-poppins pb-16 h-fit">
      <div className="md:max-w-7xl mx-auto pt-6 grid md:grid-cols-3 grid-col-1 gap-8 p-4 h-auto">
        <FooterSubscribe />
        <SafarFooter />
        <CompanyDetails />
      </div>
      <div className="bg-slate-700 py-4 absolute bottom-0 right-0 w-full text-gray-300 text-sm font-light px-4">
        <span>
          Copyright {currentYear} All Rights Reserved | Safar Travel Express
        </span>
      </div>
    </section>
  );
};

export default Footer;
