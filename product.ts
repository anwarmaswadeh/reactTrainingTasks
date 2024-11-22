//////////// Task 4 //////////// 

interface Product {
    name: string;
    price: number;
}

function calculateTotalPrice(products: Product[]): number {
    return products.reduce((total, product) => total + product.price, 0);
}

const products: Product[] = [
    { name: 'Apple', price: 2 },
    { name: 'Banana', price: 1 },
    { name: 'Orange', price: 3 },
];
console.log('Total Price:', calculateTotalPrice(products));
 

//////////// Task 5 //////////// 

function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const email = 'anwar@example.com';
console.log('Is valid email:', isValidEmail(email));


//////////// Instructions to Run //////////// 

// 1. Ensure TypeScript is installed on your system (use npm install typescript).
// 2. Open a terminal .
// 3. Compile this TypeScript file into JavaScript by running: tsc product.ts
// 4. This will generate a file named product.js in the same folder.
// 5. Run the compiled JavaScript file using Node.js with the following command: node product.js