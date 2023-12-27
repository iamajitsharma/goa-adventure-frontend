import { http } from "winston";
import db from "../models";
const Quotation = db.quotation;
const puppeteer = require("puppeteer");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");
const mediaInput = require("../middlewares/mediaInput");
export const generateQuotationPdf = async (quotationId: number) => {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--font-render-hinting=none", "--force-color-profile=srgb"],
    });
    const page = await browser.newPage();
    await page.goto(
      `${process.env.BASE_URL}/quotation/display-quotation/${quotationId}`,
      {
        waitUntil: "networkidle2",
      }
    );
    const pdfBuffer = await page.pdf({
      printBackground: true,
      format: "A4",
    });
    let invoiceUrl = await mediaInput.uploadInvoice(pdfBuffer);
    console.log("Respons from aws", invoiceUrl);
    if (!invoiceUrl.uploaded) {
      console.log("Invoice could not be generated");
      throw new ApiError(
        httpStatus.INTERNAL_SERVER_ERROR,
        "INvoice genetate but could not upload it "
      );
    }
    await browser.close();

    console.log("Booking info with invoice url", invoiceUrl);
    const quote = await updateQuotation(invoiceUrl.url, quotationId);
    console.log("QUOTEATITON VALUE  TEST URL", quote);

    return invoiceUrl.url;
  } catch (err) {
    console.log(err);
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "SOmething went wrong could not generate invoice"
    );
  }
};

export async function getQuotation(id: number) {
  const quotation = await Quotation.findByPk(id);
  return quotation.toJSON();
}
export async function createQuotation(requestBody: any) {
  const quotation = await Quotation.create(requestBody);
  return quotation;
}
export async function updateQuotation(url: string, id: number) {
  const quotation = await Quotation.update(
    { quotationurl: url },
    {
      where: { id: id },
    }
  );
  return quotation;
}
