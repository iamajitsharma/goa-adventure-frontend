//import node module libraries
import React, { Fragment } from "react";
import Image from "next/image";
import Container from "../../components/common/Container";
import VerticalLayout from "../../components/SearchPage/VerticalLayout";
import { useRouter } from "next/router";

//import custom components

//import utility function
import { getProductByCategoryName } from "../../lib/utils";

const Category = (props: any) => {
  const router = useRouter();

  return (
    <Fragment>
      <div className="relative w-full h-64 overflow-hidden font-poppins">
        <div className="shrink-0 w-full h-full">
          <Image
            src="/assets/cover.jpeg"
            width={1200}
            height={400}
            alt=""
            className="object-cover w-full h-full cursor-pointer"
          />
        </div>
        <div className="absolute top-0 bg-lightOverlay w-full h-full flex items-center justify-center px-4">
          <div className="w-full flex flex-col items-center justify-center">
            <h1 className="text-2xl md:text-3xl text-white font-bold font-merri">
              Things To Do : Grab Exciting Deals | Upto 30% Off
            </h1>
          </div>
        </div>
      </div>

      <section>
        <Container>
          <div className="py-4">
            <h1 className="text-2xl font-poppins font-bold border-l-4 border-primary pl-3">
              {router.query.category === "activity"
                ? "Top Adventure Activities"
                : "Popular Tour Packages"}
            </h1>
          </div>
          <VerticalLayout data={props.data} />
        </Container>
      </section>
    </Fragment>
  );
};

export async function getServerSideProps(context: any) {
  const { category } = context.params;
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  const data: any = await getProductByCategoryName(categoryName);

  return {
    props: { data },
  };
}

export default Category;
