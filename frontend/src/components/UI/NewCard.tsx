import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 2,
};

interface NewCardProps {
  item: any;
}

const NewCard: React.FC<NewCardProps> = ({ item }) => {
  return (
    <div className="max-w-3xl w-full lg:flex">
      <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover overflow-hidden">
        <Slider {...settings}>
          {item.gallery?.map((img: any, index: any) => (
            <Image
              src={img}
              key={index}
              alt=""
              className="object-fill w-full h-56"
              height={500}
              width={500}
            />
          ))}
        </Slider>
      </div>
      <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <h2 className="text-base text-grey-dark flex items-center">
            {item.title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default NewCard;
