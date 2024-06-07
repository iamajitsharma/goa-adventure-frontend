import Container from "components/UI/Container";
import Image from "next/image";
import { urlForImage } from "sanity/lib/image";

const ProductImageCollage = ({ images }: any) => {
  return (
    <Container>
      <div className="flex justify-center gap-0 h-80 md:h-[468px] overflow-hidden flex-nowrap rounded-2xl my-4">
        <div className="w-full h-full lg:w-3/5 object-cover px-0">
          <Image
            src={urlForImage(images && images[0])}
            alt=""
            width={975}
            height={600}
            className="px-0 object-cover w-full h-full duration-700 ease-in-out bg-white/30"
          />
        </div>
        <div className="hidden lg:grid grid-cols-2 w-2/5 gap-2 h-[468px] ml-2">
          {images &&
            images.slice(0, 4).map((item: any, index: number) => (
              <div className="relative" key={index}>
                <Image
                  src={urlForImage(item)}
                  alt=""
                  className="absolute top-0 left-0 object-cover w-full h-full  duration-700 ease-in-out group-hover:opacity-75"
                  width={975}
                  height={600}
                />
              </div>
            ))}
        </div>
      </div>
    </Container>
  );
};

export default ProductImageCollage;
