import SafarFooter from "./SafarFooter";
import CompanyDetails from "./CompanyDetails";
import FooterSubscribe from "./FooterSubscribe";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-100">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:max-w-7xl mx-auto pt-6 grid md:grid-cols-3 grid-col-1 gap-8 p-4 min-h-fit">
          <FooterSubscribe />
          <SafarFooter />
          <CompanyDetails />
        </div>
      </div>
      <div className=" bg-slate-700 py-4 w-full text-gray-300 text-sm font-light px-4">
        <span>
          Copyright {currentYear} All Rights Reserved | Safar Travel Express
        </span>
      </div>
    </footer>
  );
};

export default Footer;
