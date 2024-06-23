import ProductImageCollage from "components/product/ProductImageCollage";

import { Fragment } from "react";
import { getProductDetails } from "sanity/query/productQuery";
import Container from "components/UI/Container";
import ProductTitle from "components/product/ProductTitle";
import ProductHighlight from "components/product/ProductHighlights";
import ProductOverview from "components/product/ProductOverview";
import ProductInclusion from "components/product/ProductInclusion";
import ProductExclusion from "components/product/ProductExclusion";
import DesktopBooking from "components/product/DesktopBooking";
import MobileBooking from "components/product/MobileBooking";

const SinglePage = async ({ params }: any) => {
  const { slug } = params;
  const product = await getProductDetails(slug);

  const {
    product_title,
    duration,
    state,
    highlight,
    overview,
    inclusion,
    exclusion,
  } = product;

  return (
    <section>
      <ProductImageCollage images={product.images} />
      <Container>
        <div className="flex flex-col gap-4 w-full  md:flex-row">
          <div className="w-full md:w-8/12 overflow-hidden break-words">
            <ProductTitle
              title={product_title}
              duration={duration}
              state={state}
            />
            <ProductOverview overview={overview} title={product_title} />
            <ProductHighlight highlights={highlight} title={product_title} />
            <ProductInclusion inclusion={inclusion} />
            <ProductExclusion exclusion={exclusion} />
          </div>
          <div className="md:w-4/12">
            <DesktopBooking product={product} />
            <MobileBooking product={product} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SinglePage;
