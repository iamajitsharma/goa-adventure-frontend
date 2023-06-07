import Link from "next/link";
import Container from "@/components/Container";
import PrivacyPolicies from "@/components/disclosure/PrivacyPolicy";
import { SlEarphonesAlt, SlLocationPin } from "react-icons/sl";
import { AiOutlineMail } from "react-icons/ai";
import { useEffect, useState } from "react";
import { IPrivacy } from "../lib/interfaces";
import { privacyPoliciesApi } from "../lib/api";

export const disclosure_navLink = [
  {
    id: "01",
    path: "privacy-policy",
    display: "Privacy Policy",
  },
  {
    id: "02",
    path: "terms-conditions",
    display: "Terms & Conditions",
  },
  {
    id: "03",
    path: "cancellation-policy",
    display: "Cancellation Policy",
  },
];

const initialPrivacyPolicy: IPrivacy = {
  id: 0,
  attributes: {
    privacy_policies: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    publishedAt: new Date(),
  },
};

const PrivacyPolicy = () => {
  const [privacyPolicy, setPrivacyPolicy] =
    useState<IPrivacy>(initialPrivacyPolicy);
  console.log("Privacy pol", privacyPolicy);

  async function setPrivacy() {
    let privacy = await privacyPoliciesApi();
    console.log("privaolicy", privacy);
    setPrivacyPolicy(privacy);
  }

  useEffect(() => {
    console.log("Privacy policy", privacyPolicy);
    let test = setPrivacy();
  }, []);
  return (
    <section className="font-poppins">
      <Container>
        <div className="flex md:flex-row h-full relative">
          <div className="w-full lg:w-9/12 p-4">
            <div className="">
              <h2 className="text-2xl font-bold">Privacy Policy</h2>
              <span className="text-base text-neutral-600">
                Effective from 1st Jan 2021
              </span>
            </div>

            <div
              className="disclosure"
              dangerouslySetInnerHTML={{
                __html: privacyPolicy.attributes.privacy_policies,
              }}
            >
              {/* <h4>Introduction</h4> */}
              {/* <p>{}</p> */}
            </div>
          </div>
          <div className="hidden lg:block w-full md:w-3/12 bg-white shadow-lg p-4 rounded-lg">
            <ul className="">
              {disclosure_navLink.map((item) => (
                <li
                  key={item.id}
                  className="border-b-2 py-2 px-2 hover:bg-gray-100 hover:shadow-md"
                >
                  <Link href={item.path}>{item.display}</Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-4 py-6">
              <div className="bg-white shadow-md rounded-full flex flex-row items-center justify-start gap-4 hover:scale-105 transition duration-500">
                <div className="bg-orange-500 p-2 w-14 h-14 rounded-full flex items-center justify-center">
                  <SlEarphonesAlt className="w-6 h-6 text-white" />
                </div>
                <div className="text-base font-semibold text-neutral-700">
                  +91 9038764817
                </div>
              </div>
              <div className="bg-white shadow-md rounded-full flex flex-row items-center justify-start gap-4 hover:scale-105 transition duration-500">
                <div className="bg-orange-500 p-2 w-14 h-14 rounded-full flex items-center justify-center">
                  <AiOutlineMail className="w-6 h-6 text-white" />
                </div>
                <div className="text-base font-semibold text-neutral-700">
                  choiceyourtrip@gmail.com
                </div>
              </div>
              <div className="bg-white shadow-md rounded-full flex flex-row items-center justify-start gap-4 hover:scale-105 transition duration-500">
                <div className="bg-orange-500 p-2 w-14 h-14 rounded-full flex items-center justify-center">
                  <SlLocationPin className="w-6 h-6 text-white" />
                </div>
                <div className="text-base font-semibold text-neutral-700">
                  Calangute Goa 403513
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4"></div>
      </Container>
    </section>
  );
};

export default PrivacyPolicy;
