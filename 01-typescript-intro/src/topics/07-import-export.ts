import { Product, taxCalculation } from "./06-function-destructuring";



const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 300
    }
];


const [total, tax] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
});

console.log('Total', total);
console.log('Tax', tax);