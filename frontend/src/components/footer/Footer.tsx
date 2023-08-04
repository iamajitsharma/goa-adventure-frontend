import SafarFooter from "./SafarFooter";
import CompanyDetails from "./CompanyDetails";
import FooterSubscribe from "./FooterSubscribe";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full h-1/2 relative bg-slate-300 shadow-md font-poppins pb-16">
      <div className="md:max-w-7xl mx-auto pt-6 grid md:grid-cols-3 grid-col-1 gap-8 p-4 min-h-fit">
        <FooterSubscribe />
        <SafarFooter />
        <CompanyDetails />
      </div>
      <div className="absolute bg-slate-700 py-4 bottom-0 right-0 w-full text-gray-300 text-sm font-light px-4">
        <span>
          Copyright {currentYear} All Rights Reserved | Safar Travel Express
        </span>
      </div>
    </footer>
  );
};

export default Footer;
