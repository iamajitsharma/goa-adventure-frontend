export function calculateSalePrice(discount_percent: number, price: number) {
  return ((100 - discount_percent) * price) / 100;
}
