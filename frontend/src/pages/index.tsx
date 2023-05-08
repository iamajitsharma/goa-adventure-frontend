import HeavenEarth from "@/components/HeavenEarth";
import BannerSlider from "@/components/featured/BannerSlider";
import PartnerLogo from "@/components/featured/PartnerLogo";
import WhyChoose from "@/components/featured/WhyChoose";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero";
import ActivityListing from "@/components/listings/ActivityListing";
import TourListing from "@/components/listings/TourListing";

export default function Index() {
  return (
    <div>
      <Hero />
      <HeavenEarth />
      <ActivityListing />
      <WhyChoose />
      <TourListing />
      <BannerSlider />
      <PartnerLogo />
      <Footer />
    </div>
  );
}
