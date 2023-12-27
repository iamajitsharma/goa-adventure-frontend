import db from "../models";
const Product = db.product;

export const createProduct = async (requestBody: any) => {
  const data1 = await Product.create(requestBody);

  return data1;
};

export const getProductById = async (id: number) => {
  const data = await Product.findByPk(id);

  return data;
};
