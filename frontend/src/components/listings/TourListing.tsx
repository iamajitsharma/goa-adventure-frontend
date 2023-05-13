import Slider from "react-slick";
import Heading from "../Heading";
import ListingCard from "./ListingCard";
import CarouselNextArrow from "../CarouselNextArrow";
import CarouselPrevArrow from "../CarouselNextArrowTourPack";
import TourCardImg from "../../../public/assets/tourcard.jpeg";

const settings = {
  infinite: true,
  autoplay: false,
  autoplaySpeed: 1000,
  speed: 1700,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 2,
  nextArrow: <CarouselNextArrow />,
  prevArrow: <CarouselPrevArrow />,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const TourListing = () => {
  return (
    <section className="bg-white w-full py-4">
      <Heading heading={"Recommended tour packages"} />
      <div className="md:max-w-7xl mx-auto px-5">
        <Slider {...settings}>
          {[0, 1, 2, 3, 4, 5, 6, 7].map((num) => (
            <ListingCard
              title="Goa Tour Package"
              image={TourCardImg}
              location="Goa"
              duration="3N/4D"
              review={4.5}
              reviewCount={`(450 reviews)`}
              salePrice={2500}
              regularPrice={5000}
              discount={`25%`}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TourListing;
