import Slider from "react-slick";
import Heading from "../common/Heading";
import ListingCard from "./ListingCard";
import CarouselNextArrow from "../UI/CarouselNextArrow";
import CarouselPrevArrow from "../CarouselNextArrowTourPack";
import TourCardImg from "../../../public/assets/tourcard.jpeg";
const handleEdge = (edge: string) => {
  console.log(`Edge reached: ${edge}`);
};

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
  onEdge: (edge: string) => handleEdge(edge),
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
    <section className="">
      <Heading heading={"Recommended tour packages"} />
      <div className="md:max-w-7xl mx-auto bg-white">
        <Slider {...settings} className="">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((num) => (
            <ListingCard
              key={num}
              title="Honeymoon Goa Tour Package for 3 Night 4 Days"
              image={TourCardImg}
              location="Goa"
              duration="3N/4D"
              review={4.5}
              reviewCount={`(450 reviews)`}
              salePrice={2500}
              regularPrice={5000}
              discount={`25%`}
              href="localhost"
              // className={
              //   currentSlide === num
              //     ? "slick-current"
              //     : num === 0
              //     ? "slick-first"
              //     : num === 7
              //     ? "slick-last"
              //     : ""
              // }
            />
          ))}
        </Slider>
        <style jsx>{`
          .slick-slide:first-child::before {
            padding-left: 0;
          }

          .slick-slide:last-child::after {
            padding-right: 0;
          }
        `}</style>
      </div>
    </section>
  );
};

export default TourListing;
