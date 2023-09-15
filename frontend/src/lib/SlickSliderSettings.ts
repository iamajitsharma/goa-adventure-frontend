import RightArrow from "@/components/UI/RightArrow";
import LeftArrow from "@/components/UI/LeftArrow";

export const activitySliderSetting = {
  dots: false,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 1000,
  pauseOnHover: true,

  nextArrow: <RightArrow />,
  prevArrow: <LeftArrow />,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 2,
};
