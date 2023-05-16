import Image from "next/image";
import airasia from "../../../public/airasia.png";
import airbnb from "../../../public/airbnb.png";
import expedia from "../../../public/expedia.png";
import tripadvisor from "../../../public/airasia.png";
import Heading from "../common/Heading";
import { partnerLogos } from "./partnerLogos";

const PartnerLogo = () => {
  return (
    <section className="hidden md:block md:w-full md:bg-white md:py-4">
      <Heading heading={"Our Partners"} />
      <div className="grid grid-cols-6 max-w-7xl mx-auto items-center justify-center pb-8">
        {partnerLogos.map((item) => (
          <div className="justify-self-center w-1/2" key={item.id}>
            <Image src={item.logo} alt="Air Asia" className="img-filter" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnerLogo;
