import Container from "@/components/common/Container";
import { useEffect, useState } from "react";
import { ITerms } from "../lib/interfaces";
import { termsCondiitonsApi } from "../lib/api";

const intialTermsConditons: ITerms = {
  id: 0,
  attributes: {
    terms_conditions: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    publishedAt: new Date(),
  },
};

const TermsConditions = (props: any) => {
  return (
    <section className="font-poppins">
      <Container>
        <div className="p-4">
          <div className="">
            <h2 className="text-2xl font-bold">Terms & Conditions</h2>
            <span className="text-base text-neutral-600">
              Effective from 1st Jan 2021
            </span>
          </div>
          <div
            className="disclosure"
            dangerouslySetInnerHTML={{
              __html: props?.termsConditions?.terms_conditions,
            }}
          ></div>
        </div>
      </Container>
      {/* <Loader
        loaded={loaded}
        lines={13}
        length={20}
        width={10}
        radius={30}
        corners={1}
        rotate={0}
        direction={1}
        color="#000"
        speed={1}
        trail={60}
        shadow={false}
        hwaccel={false}
        className="spinner"
        zIndex={2e9}
        top="50%"
        left="50%"
        scale={1.0}
        loadedClassName="loadedContent"
      /> */}
    </section>
  );
};

export const getStaticProps = async () => {
  const termsConditions = await termsCondiitonsApi();
  return {
    props: {
      termsConditions,
    },
  };
};

export default TermsConditions;
