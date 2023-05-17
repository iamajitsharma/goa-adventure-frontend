import HeavenEarth from "@/components/location/HeavenEarth";
import BannerSlider from "@/components/featured/BannerSlider";
import PartnerLogo from "@/components/featured/PartnerLogo";
import WhyChoose from "@/components/featured/WhyChoose";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/Hero";
import ActivityListing from "@/components/listings/ActivityListing";
import TourListing from "@/components/listings/TourListing";
import Navbar from "@/components/navbar/Navbar";
import Modal from "@/components/modals/Modal";

import LocationMobileSlider from "@/components/location/LocationMobileSlider";

import MobileSlider from "@/components/featured/MobileSlider";

export default function Index() {
  return (
    <>
      <Hero />
      <LocationMobileSlider />
      <ActivityListing />
      <WhyChoose />
      <TourListing />
      <BannerSlider />
      <PartnerLogo />
    </>
  );
}
