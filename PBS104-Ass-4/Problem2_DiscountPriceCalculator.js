function calculateFinalPrice(price) {
    // Check for invalid input
    if (price < 0) {
        return "Invalid price, the price must be a non-negative number.";
    }

    // Apply discount if the price is greater than $20
    if (price > 20) {
        price = price - (price * 0.10);
    }

    return `The final price of the item is: ${price}`;
}

function main() {
    // Test cases
    const testCases = [
        { price: 25, expected: "The final price of the item is: 22.5" },
        { price: 20, expected: "The final price of the item is: 20" },
        { price: 15, expected: "The final price of the item is: 15" },
        { price: -5, expected: "Invalid price, the price must be a non-negative number." }
    ];

    testCases.forEach((test, index) => {
        const { price, expected } = test;
        
        const result = calculateFinalPrice(price);
        
        // Print the result
        console.log(`Test Case ${index + 1}: ${result}`);
        
        // Verify the result
        if (result !== expected) {
            console.error(`Test Case ${index + 1} failed: expected ${expected}, got ${result}`);
        }
    });
}

main();