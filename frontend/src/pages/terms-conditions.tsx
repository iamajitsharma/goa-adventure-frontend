import Container from "@/components/common/Container";
import { useEffect, useState } from "react";
import { ITerms } from "../lib/interfaces";
import { termsCondiitonsApi } from "../lib/api";
import parse from "html-react-parser";
import useCustomer from "@/hook/useCustomer";
import { client } from "@/lib/client";
import PortableText from "react-portable-text";

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
  console.log(props.data);
  return (
    <section className="font-poppins">
      <Container>
        <div className="p-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold ">{props.data[0]?.title}</h2>
            <span className="text-base text-neutral-600">
              Effective from {props.data[0]?.wef}
            </span>
          </div>
          <div className="py-6 text-sm leading-6">
            <PortableText content={props.data[0].content} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export const getStaticProps = async () => {
  const query = `*[_type == "websitepolicies" && title == "Terms & Conditions"]`;
  const data = await client.fetch(query);

  return {
    props: {
      data,
    },
    revalidate: 360,
  };
};

export default TermsConditions;
