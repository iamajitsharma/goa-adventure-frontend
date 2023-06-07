import { remark } from "remark";
import html from "remark-html";
import { IPrivacy, ITerms } from "./interfaces";
import { calculateSalePrice } from "./operations";

const devServer = "http://localhost:1337/api";
const prodServer = "";
const serverURL = devServer;
//const serverURL = prodServer;
export const url = "http://localhost:1337";

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
    privacy_policies: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    publishedAt: new Date(),
  },
};
const intialTermsConditons: ITerms = {
  id: 0,
  attributes: {
    terms_conditions: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    publishedAt: new Date(),
  },
};

export async function termsCondiitonsApi(): Promise<ITerms> {
  const result: any = await fetch(
    `${serverURL}/terms-condition`,
    requestOptions
  );

  const response = await result.json();
  console.log("Result terms", response);
  if (response.data) {
    const processedContent = await remark()
      .use(html)
      .process(response.data.attributes.terms_conditions);
    const contentHtml = processedContent.toString();
    response.data.attributes.terms_conditions = contentHtml;
    console.log("HTMl content terms", response.data);
    return response.data;
  }

  return intialTermsConditons;
}

export async function privacyPoliciesApi(): Promise<IPrivacy> {
  const result: any = await fetch(
    `${serverURL}/privacy-policy`,
    requestOptions
  );
  console.log("Raw data", result);
  const response = await result.json();
  console.log("Result privacy", response);
  if (response.data) {
    const processedContent = await remark()
      .use(html)
      .process(response.data.attributes.privacy_policies);
    const contentHtml = processedContent.toString();
    response.data.attributes.privacy_policies = contentHtml;
    console.log("HTMl content privacy", response.data);
    return response.data;
  }

  return initialPrivacyPolicy;
}

export async function fetchProducts() {
  const result: any = await fetch(
    `${serverURL}/products?populate=*`,
    requestOptions
  );

  const response = await result.json();

  if (response.data) {
    console.log("Result products", response);
    response.data = response.data.filter((img: any) => img.id !== 4);
    response.data.map((info: any) => {
      info.attributes.salePrice = calculateSalePrice(
        info.attributes.discount_percent,
        info.attributes.price
      );
    });
    return response.data;
  }
}
