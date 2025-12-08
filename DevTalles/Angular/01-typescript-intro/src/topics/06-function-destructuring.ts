export interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "Nokia A1",
  price: 1500,
};

const tablet: Product = {
  description: "iPad Air",
  price: 3500,
};

const shoppingCart: Product[] = [phone, tablet];
const tax = 0.15;

interface TaxCalculationOptions {
  products: Product[];
  tax: number;
}

//function taxCalculation( option: TaxCalculationOptions ): number[] {
//function taxCalculation({tax, products}: TaxCalculationOptions ): number[] {
export function taxCalculation(option: TaxCalculationOptions): number[] {
  const { tax, products } = option;
  let total = 0;
  products.forEach((product) => {
    total += product.price;
  });

  return [total, total * tax];
}

//funcion con destructuracion

function taxCalculationDestructuring(
  option: TaxCalculationOptions
): [number, number] {
  let total = 0;
  option.products.forEach(({ price }) => {
    total += price;
  });

  return [total, total * option.tax];
}

const result = taxCalculation({ products: shoppingCart, tax });
console.log("Total:", result[0]);
console.log("Tax:", result[1]);

//Destructuring
const [total, taxAmount] = taxCalculation({ products: shoppingCart, tax });
console.log("Total with Destructuring:", total);
console.log("Tax with Destructuring:", taxAmount);

export {};
