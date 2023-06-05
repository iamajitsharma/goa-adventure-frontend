import { remark } from "remark";
import html from "remark-html";

const devServer = "http://localhost:1337/api";
const prodServer = "";
const serverURL = devServer;
//const serverURL = prodServer;

var myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  "Bearer 1bb995d0c2573ded0423f5837e479cfbb621bcf618475b1aa0ad373c3251d801e25433308cb98d684e5a782decb62bf27609bf8e0882da5e0fe11b48fb28cd66c22f235fda8cc6cf98583d987edf52a718e01fad386ede2cc94b4ebe8646bc7b0311ca178bbb0034f2d59182870be0e1cc093ce0e6e74299576945aba7d11806"
);
var requestOptions = {
  method: "GET",
  headers: myHeaders,
};
const initialPrivacyPolicy: IPrivacy = {
  id: 0,
  attributes: {
    terms_conditions: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    publishedAt: new Date(),
  },
};

import { IPrivacy } from "./interfaces";

export async function privacyPolicies(): Promise<IPrivacy> {
  const result: any = await fetch(
    `${serverURL}/terms-condition`,
    requestOptions
  );

  const response = await result.json();
  console.log("Result", response);
  if (response.data) {
    const processedContent = await remark()
      .use(html)
      .process(response.data.attributes.terms_conditions);
    const contentHtml = processedContent.toString();
    response.data.attributes.terms_conditions = contentHtml;
    console.log("HTMl content", response.data);
    return response.data;
  }

  return initialPrivacyPolicy;
}
