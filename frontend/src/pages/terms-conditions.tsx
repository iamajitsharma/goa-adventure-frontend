import Container from "@/components/Container";

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

const TermsConditions = () => {
  const [termsCondiitons, setTermsConditons] =
    useState<ITerms>(intialTermsConditons);

  async function setTerms() {
    let privacy = await termsCondiitonsApi();
    console.log("privaolicy", privacy);
    setTermsConditons(privacy);
  }

  useEffect(() => {
    console.log("Terms Condtions", termsCondiitons);
    let test = setTerms();
  }, []);
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
              __html: termsCondiitons.attributes.terms_conditions,
            }}
          ></div>
        </div>
      </Container>
    </section>
  );
};

export default TermsConditions;
