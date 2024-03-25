import { RightArrow, LeftArrow } from "../components/common/SliderArrow";

export const productSliderSettings = {
  dots: false,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 1000,
  pauseOnHover: true,
  nextArrow: <RightArrow />,
  prevArrow: <LeftArrow />,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 2,
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
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
