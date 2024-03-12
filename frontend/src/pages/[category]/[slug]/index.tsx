import { useRouter } from "next/router";
import Image from "next/image";
import Container from "@/components/common/Container";
import ProductTitle from "@/components/SingleProductPage/ProductTitle";
import Overviews from "@/components/SingleProductPage/Overviews";
import Accordion from "@/components/common/Accordion";
import { AiFillStar } from "react-icons/ai";
import ProductImages from "@/components/SingleProductPage/ProductImages";
import Pricing from "@/components/SingleProductPage/Pricing";
import { RiAlbumLine } from "react-icons/ri";
import Box from "@/components/common/Box";
import { BsCheck2Circle, BsTelephone } from "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { FiMapPin, FiClock } from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion";
import { ImWhatsapp } from "react-icons/im";
import { getSinglePageDetails } from "../../../lib/api";
import { calculateSalePrice } from "@/lib/operations";
import { getHomePageActivity } from "../../../lib/api";
import ProductLayout from "@/components/SingleProductPage/ProductLayout";
import { client } from "../../../lib/client";
import { urlForImage } from "../../../lib/client";
import ProductDetails from "@/components/SingleProductPage/ProductDetails";
import ProductHighlight from "@/components/SingleProductPage/ProductHighlight";
import ProductDescription from "@/components/SingleProductPage/ProductDescription";
import { useParse } from "@/hook/useParse";
import AccordionList from "@/components/SingleProductPage/AccordionList";
import { FcCheckmark } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import ProductSidebar from "@/components/SingleProductPage/ProductSidebar";

const index = (props: any) => {
  const router = useRouter();
  const salePrice = calculateSalePrice(
    props?.data?.discount,
    props.data?.price
  );

  const text = props?.data?.overview.map((item: any) => console.log(item.text));

  return (
    <section className="pt-0 bg-slate-50">
      {/* Product Slider Start */}
      <ProductImages images={props?.data?.images} />

      {/* Product Content Start */}
      <Container>
        <div className="flex flex-col gap-4 w-full  md:flex-row">
          <div className="w-full md:w-8/12 overflow-hidden break-words">
            {/* Product Title Section */}
            <ProductDetails
              title={props?.data?.product_title}
              location={props?.data?.location}
              state={props?.data.state}
              duration={props?.data.duration}
            />

            {/* Product Highlight */}
            <ProductHighlight
              title={props?.data?.product_title}
              highlight={props?.data?.highlight}
            />
            <Box className={"bg-white"}>
              <ProductTitle level={2} title={props?.data?.product_title} />
              <ProductDescription content={props?.data?.overview} />
            </Box>

            <Box className="bg-white">
              <AccordionList
                title="Inclusion"
                data={props.data.inclusion}
                icon={<FcCheckmark className="text-base" />}
              />

              <AccordionList
                title="Exclusion"
                data={props.data.exclusion}
                icon={<RxCross2 className="text-rose-500 text-base" />}
              />
            </Box>
          </div>
          <div className="md:w-4/12">
            <ProductSidebar data={props.data} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export async function getStaticPaths() {
  // Fetch all category slugs
  const categories = await client.fetch(
    `*[_type == "category"] {
      "params": { "slug": slug.current }
    }`
  );

  // Fetch product slugs for each category
  const paths = await Promise.all(
    categories.map(async ({ params }: any) => {
      const productSlugs = await client.fetch(
        `*[_type == "product" && category->slug.current == $category] {
          "params": { "category": category->slug.current, "slug": slug.current }
        }`,
        { category: params.slug }
      );
      return productSlugs.map(({ params }: any) => ({
        params: {
          category: params.category,
          slug: params.slug,
        },
      }));
    })
  );

  // Flatten the array of paths
  return { paths: paths.flat(), fallback: false };
}

export async function getStaticProps({ params }: any) {
  const { category, slug } = params;
  const productQuery = `*[_type == "product" && slug.current == $slug && category->slug.current == $category] | order(_updatedAt desc) [0]`;
  const data = await client.fetch(productQuery, {
    category,
    slug,
  });

  return {
    props: { data },
  };
}

export default index;
