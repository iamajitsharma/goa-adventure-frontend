import Image from "next/image";
import airasia from "../../../public/airasia.png";
import airbnb from "../../../public/airbnb.png";
import expedia from "../../../public/expedia.png";
import tripadvisor from "../../../public/airasia.png";
import { partnerLogos } from "./partnerLogos";

const PartnerLogo = () => {
  return (
    <section className="w-full md:bg-white md:py-4">
      <div className="grid grid-cols-3 gap-6 md:gap-4 md:grid-cols-6 lg:grid-cols-7 max-w-7xl mx-auto items-center justify-center pb-8">
        {partnerLogos.map((item: any, index: any) => (
          <div className="object-contain shrink-0" key={index}>
            <Image
              src={item.logo}
              alt={`Safar Travel Express is partner with ${item.name}`}
              className="img-filter w-40 h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnerLogo;
