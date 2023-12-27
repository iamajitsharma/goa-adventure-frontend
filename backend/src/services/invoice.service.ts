const crypto = require("crypto");

import { Request, Response } from "express";
import db from "../models";
import { bookingService } from "../services";
const mediaInput = require("../middlewares/mediaInput");

const fs = require("fs");
const pdf = require("pdf-creator-node");
const path = require("path");
const ejs = require("ejs");

const data = require("../utils/data");
const Booking = db.booking;

interface BookingInfo {
  id: number;
  name: string;
  city: string;
  mobile_number: string;
  country: string;
  title: string;
  quantity: string;
  total_amount: string;
  deposit_amount: string;
  pending_amount: string;
  start_date: string;
  booking_date: string;
}

export const generateInvoice = async (bookingInfo: BookingInfo, html: any) => {
  const document = {
    html: html,
    data: bookingInfo,
    // path: "./docs/" + filename,
    type: "buffer",
  };
  console.log("Response", pdf);
  console.log("Doucment", document);
  const options = {
    formate: "A4",
    orientation: "portrait",
    border: "2mm",
    timeout: "100000",
  };
  console.log("OPtions", options);
  let pdfResponse = await pdf.create(document, options);
  console.log("PDf response", pdfResponse);
  let response = await mediaInput.uploadInvoice(pdfResponse);

  if (!response.uploaded) {
    return 0;
  }
  return response.url;
};

export const testPdf = async (bookingInfo: any, html: any) => {
  const document = {
    html: html,
    data: bookingInfo,
    // path: "./docs/" + filename,
    type: "buffer",
  };
  console.log("Response", pdf);
  console.log("Doucment", document);
  const options = {
    formate: "A4",
    orientation: "portrait",
    border: "2mm",
    timeout: "100000",
  };
  console.log("OPtions", options);
  let pdfResponse = await pdf.create(document, options);
  console.log("PDf response", pdfResponse);
  let response = await mediaInput.uploadInvoice(pdfResponse);

  if (!response.uploaded) {
    return 0;
  }
  return response;
};
