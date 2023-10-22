import { remark } from "remark";
import html from "remark-html";
import { IPrivacy, ITerms } from "./interfaces";
import { calculateSalePrice } from "./operations";
import { toast } from "react-toastify";

const devServer = "http://localhost:4000/v1";
const prodServer = "https://backend.goaadventure.in/v1";
//const serverURL = prodServer;
const serverURL = devServer;
export const url = "http://localhost:1337";
//test commit
var myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  "Bearer 1bb995d0c2573ded0423f5837e479cfbb621bcf618475b1aa0ad373c3251d801e25433308cb98d684e5a782decb62bf27609bf8e0882da5e0fe11b48fb28cd66c22f235fda8cc6cf98583d987edf52a718e01fad386ede2cc94b4ebe8646bc7b0311ca178bbb0034f2d59182870be0e1cc093ce0e6e74299576945aba7d11806"
);
var requestOptions = {
  method: "GET",
  headers: myHeaders,
  next: { revalidate: 360 },
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
    `${serverURL}/terms-conditions`,
    requestOptions
  );

  const response = await result.json();

  // if (response.data) {
  //   const processedContent = await remark()
  //     .use(html)
  //     .process(response.data.attributes.terms_conditions);
  //   const contentHtml = processedContent.toString();
  //   response.data.attributes.terms_conditions = contentHtml;
  //   //console.log("HTMl content terms", response.data);
  //   return response.data;
  // }

  return response;
}

export async function privacyPoliciesApi(): Promise<IPrivacy> {
  const result: any = await fetch(
    `${serverURL}/privacy-policies`,
    requestOptions
  );

  const response = await result.json();

  // if (response.data) {
  //   const processedContent = await remark()
  //     .use(html)
  //     .process(response.data.attributes.privacy_policies);
  //   const contentHtml = processedContent.toString();
  //   response.data.attributes.privacy_policies = contentHtml;
  //   //console.log("HTMl content privacy", response.data);
  //   return response.data;
  // }

  return response;
}

export async function fetchProducts() {
  try {
    const result: any = await fetch(
      `${serverURL}/products?populate=*`,
      requestOptions
    );

    if (!result.ok) {
      throw new Error(
        `Failed to fetch products. Status code: ${result.status}`
      );
    }
    const response = await result.json();
    return response;
  } catch (error) {
    console.error("Error fetching products", error);
    throw error;
  }
}

export async function fetchOrderIdForRazorPay() {
  const result: any = await fetch(
    `${serverURL}/payment/create-order`,
    requestOptions
  );

  const response = await result.json();
  return response;
}

export async function getBookingInfo(orderId: string) {
  const result: any = await fetch(
    `${serverURL}/booking/invoice/${orderId}`,
    requestOptions
  );

  const response = await result.json();
  return response;
}

export async function getDestination() {
  const result: any = await fetch(
    `${serverURL}/location/getMainHomePageDestination`,
    requestOptions
  );

  const response = await result.json();
  return response;
}

export async function getHomePageSearch(text: string) {
  const result: any = await fetch(
    `${serverURL}/products/home-page-search/${text}`,
    requestOptions
  );

  const response = await result.json();
  return response;
}

export async function getUserBookings(id: number) {
  const result: any = await fetch(
    `${serverURL}/customer/bookings/${id}`,
    requestOptions
  );

  const response = await result.json();
  return response;
}

// Acitivity API

export async function getHomePageActivity() {
  try {
    const result: any = await fetch(
      `${serverURL}/products/activity/getHomePageActivity`,
      requestOptions
    );

    if (!result.ok) {
      throw new Error(
        `Failed to fetch products. Status code: ${result.status}`
      );
    }

    const response = await result.json();

    return response;
  } catch (error) {
    console.error("Failed To Fetch", error);
    toast.error("Something went wrong");
  }
}

// Single Page Activity

export async function getSinglePageDetails(slug: any) {
  const result: any = await fetch(
    `${serverURL}/products/${slug}`,
    requestOptions
  );
  const product = await result.json();
  return product;
}

export async function getHomePageTour() {
  const result: any = await fetch(
    `${serverURL}/products/tours/getHomePageTours`,
    requestOptions
  );

  const response = await result.json();
  return response;
}

export async function getCategories() {
  const result: any = await fetch(`${serverURL}/categories`, requestOptions);

  const response = await result.json();
  return response;
}

export async function fetchUserInfo(customerId: number) {
  const result: any = await fetch(
    `${serverURL}/customer/${customerId}`,
    requestOptions
  );

  const response = await result.json();
  return response;
}

export async function getSubCategories() {
  const result: any = await fetch(`${serverURL}/subcategories`, requestOptions);

  const response = await result.json();
  return response;
}
export async function getPriceRange(options: any) {
  let url = `${serverURL}/products/price-range/filter?`;
  if (options.category) {
    url += `category_id=${options.category}&`;
  }
  if (options.subcategory) {
    url += `subcategory_id=${options.subcategory}&`;
  }
  // else if (options.minMaxPrice.minPrice && options.minMaxPrice.maxPrice) {
  //   url += `min_price=${options.minMaxPrice.minPrice}&max_price=${options.minMaxPrice.maxPrice}&`;
  // }
  const result: any = await fetch(url, requestOptions);

  const response = await result.json();
  return response;
}

export async function createCustomerAndLogin(
  email: string,
  mobileNo: string,
  name: string
) {
  var raw = JSON.stringify({
    email,
    mobile_number: mobileNo,
    name,
  });
  var requestOptionsForPost = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };
  const result: any = await fetch(
    `${serverURL}/customer/create-and-login-customer`,
    requestOptionsForPost
  );

  const response = await result.json();
  return response;
}

export async function getProductsWithFilter(options: any) {
  let url = `${serverURL}/products/products-list/filter?`;
  if (options.category) {
    url += `category_id=${options.category}&`;
  }
  if (options.subcategory) {
    url += `subcategory_id=${options.subcategory}&`;
  }
  if (options.minMaxPrice.minPrice && options.minMaxPrice.maxPrice) {
    url += `min_price=${options.minMaxPrice.minPrice}&max_price=${options.minMaxPrice.maxPrice}&`;
  }

  const result: any = await fetch(url, requestOptions);

  const response = await result.json();

  return response;
}

export async function customerMobileLogIn(
  mobile_number: string,
  password: string
) {
  var requestOptionsForPost: any = {
    method: "post",
    headers: { "Content-Type": "application/json" },

    body: JSON.stringify({
      mobile_number,
      password,
    }),
  };
  let url = `${serverURL}/customer/mobile-number-login`;
  console.log("Resposne", requestOptionsForPost);

  const result: any = await fetch(url, requestOptionsForPost);

  const response = await result.json();

  return response;
}

export async function customerEmailLogIn(email: string, password: string) {
  var requestOptionsForPost: any = {
    method: "post",
    headers: { "Content-Type": "application/json" },

    body: JSON.stringify({
      email,
      password,
    }),
  };
  let url = `${serverURL}/customer/email-login`;
  console.log("Resposne", requestOptionsForPost);

  const result: any = await fetch(url, requestOptionsForPost);

  const response = await result.json();

  return response;
}

export async function customerRegistration(requestBody: any, setError: any) {
  var requestOptionsForPost: any = {
    method: "post",
    headers: { "Content-Type": "application/json" },

    body: JSON.stringify(requestBody),
  };
  let url = `${serverURL}/customer/create-and-login-customer`;
  console.log("Resposne", requestOptionsForPost);
  let response: any = {};
  // try {
  const result: any = await fetch(url, requestOptionsForPost);

  response = await result.json();
  if (response.message) {
    setError({
      message: "An account with same email already exist",
      status: true,
    });
  }
  // } catch (err) {
  //   console.log(err);
  //   setError({
  //     message: "An account with same email already exist",
  //     status: true,
  //   });
  //}

  return response;
}

export async function getProductById(productId: any) {
  const result = await fetch(
    `${serverURL}/product/${productId}`,
    requestOptions
  );

  const product = await result.json();
  return product;
}
