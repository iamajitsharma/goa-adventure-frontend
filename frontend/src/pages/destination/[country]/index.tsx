import React, { useState, useEffect } from "react";
import Image from "next/image";
import CoverImage from "../../../../public/assets/cover.jpeg";
import { useRouter } from "next/router";
import Container from "@/components/common/Container";
import Overviews from "@/components/SingleProductPage/Overviews";
import Box from "@/components/common/Box";
import ProductSlider from "@/components/UI/ProductSlider";
import DestinationList from "@/components/UI/DestinationList";
import { useParams } from "next/navigation";

const index = () => {
  const router = useRouter();
  const params = useParams();
  //console.log(params);
  const { country } = router.query;

  return (
    <>
      <div className="relative w-full h-96 overflow-hidden font-poppins">
        <div className="shrink-0 w-full h-full">
          <Image
            src={CoverImage}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute top-0 bg-lightOverlay w-full h-full flex items-center justify-start">
          <div className="w-full md:w-3/4 lg:w-3/5">
            <h1 className="text-3xl md:text-5xl text-white font-bold pl-2 md:pl-16 font-merri capitalize">
              {country} Tour Packages : Grab Exciting Deals | Upto 50% Off
            </h1>
          </div>
        </div>
      </div>

      <section className="bg-neutral-100 font-poppins">
        <Container>
          <Box className="bg-white">
            <div className="py-2">
              <h2 className="text-xl font-semibold capitalize py-[2px] px-2 border-l-4 border-l-primary">
                Know More About {country}
              </h2>
            </div>
            <Overviews
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            autem hic magni, ipsum quo rem quia, pariatur, consectetur sit fuga
            ex omnis. Vero doloremque dolor inventore illo sed dolorem facilis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            autem hic magni, ipsum quo rem quia, pariatur, consectetur sit fuga
            ex omnis. Vero doloremque dolor inventore illo sed dolorem facilis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            autem hic magni, ipsum quo rem quia, pariatur, consectetur sit fuga
            ex omnis. Vero doloremque dolor inventore illo sed dolorem facilis."
            />
          </Box>

          <Box className="bg-white">
            <div className="pt-2 pb-6">
              <h2 className="text-lg md:text-xl font-semibold capitalize py-[2px] px-2 border-l-4 border-l-primary">
                Top tourist destination in {country}
              </h2>
            </div>
            {/* <DestinationList /> */}
          </Box>

          <Box>
            <div className="pt-2 pb-6">
              <h2 className="text-lg md:text-xl font-semibold capitalize py-[2px] px-2 border-l-4 border-l-primary">
                Popular tour package {country}
              </h2>
            </div>
            {/* <ProductSlider data={products} /> */}
          </Box>
          <Box>
            <div className="pt-2 pb-6">
              <h2 className="text-lg md:text-xl font-semibold capitalize py-[2px] px-2 border-l-4 border-l-primary">
                Thing to do in {country}
              </h2>
            </div>
            {/* <ProductSlider data={products} /> */}
          </Box>
        </Container>
      </section>
    </>
  );
};

export default index;
