import Link from "next/link";
import Container from "@/components/common/Container";
import PrivacyPolicies from "@/components/disclosure/PrivacyPolicy";
import { SlEarphonesAlt, SlLocationPin } from "react-icons/sl";
import { AiOutlineMail } from "react-icons/ai";
import { useEffect, useState } from "react";
import { IPrivacy } from "../lib/interfaces";
import { privacyPoliciesApi } from "../lib/api";
import useCustomer from "@/hook/useCustomer";
import { client } from "@/lib/client";
import PortableText from "react-portable-text";

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

const PrivacyPolicy = (props: any) => {
  return (
    <section className="font-poppins">
      <Container>
        <div className="flex md:flex-row h-full relative">
          <div className="w-full lg:w-9/12 p-4">
            <div className="">
              <h2 className="text-2xl font-bold">{props.data[0].title}</h2>
              <span className="text-base text-neutral-600">
                Effective from {props.data[0].wef}
              </span>
            </div>

            <div className="text-sm py-6 leading-6">
              <PortableText content={props.data[0].content} />
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
                  +91 7387960861
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

export const getStaticProps = async () => {
  const query = `*[_type == "websitepolicies" && title == "Privacy Policy"]`;

  const data = await client.fetch(query);
  return {
    props: {
      data,
    },
    revalidate: 360,
  };
};

export default PrivacyPolicy;
