import { Product, taxCalculation } from "./06-function-destructuring";

const shopopingCart: Product[] = [
  { description: "Nokia A1", price: 1500 },
  { description: "iPad Air", price: 3500 },
];

const [total, taxAmount] = taxCalculation({
  products: shopopingCart,
  tax: 0.15,
});
console.log("Total:", total);
console.log("Tax:", taxAmount);
