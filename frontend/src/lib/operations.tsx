//Calculation of sale price

export function calculateSalePrice(discount_percent: number, price: number) {
  return ((100 - discount_percent) * price) / 100;
}

export function dateFormatChange(inputDate: any) {
  //Create a date object from the input date
  const date = new Date(inputDate);

  //Define month names
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = date.getUTCDate();
  const month = monthNames[date.getUTCMonth()];
  const year = date.getUTCFullYear();

  // Create the formatted date string
  const formattedDate = `${day}-${month}-${year}`;

  return {
    day: day,
    month: month,
    year: year,
    formattedDate,
  };
}

export function dateFormate(date: any) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
}
