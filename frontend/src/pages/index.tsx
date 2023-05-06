import PartnerLogo from "@/components/featured/PartnerLogo";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import ActivityListing from "@/components/listings/ActivityListing";
import TourListing from "@/components/listings/TourListing";

export default function Index() {
  return (
    <div>
      <Hero />
      <ActivityListing />
      <TourListing />
      <PartnerLogo />
      <Footer />
    </div>
  );
}
