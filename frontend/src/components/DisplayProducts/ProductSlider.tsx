//import node module libraries
import Slider from "react-slick";

//import custom components
import Heading from "../common/Heading";
import Container from "../common/Container";
import ProductCard from "../Card/ProductCard";

//import slider setting
import { productSliderSettings } from "@/data/ProductSliderSettings";

interface ProductSliderProps {
  data: any[];
  heading?: string;
  subheading?: string;
  textAlign?: string;
}

const ProductSlider: React.FC<ProductSliderProps> = ({
  data,
  heading,
  subheading,
  textAlign,
}) => {
  console.log(data);

  return (
    <section className="pt-0">
      <Container>
        <Heading
          textAlign={textAlign}
          heading={heading}
          subheading={subheading}
        />
        <Slider {...productSliderSettings} className="pt-8">
          {data &&
            data.map((item: any, index: number) => (
              <ProductCard item={item} key={item._id} />
            ))}
        </Slider>
      </Container>
    </section>
  );
};

export default ProductSlider;
