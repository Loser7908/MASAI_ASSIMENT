function calculateSimpleInterest(principal, rate, time) {
    // Check for invalid input
    if (principal < 0 || rate < 0 || time < 0) {
        return "Invalid input, all values must be non-negative.";
    }

    // Calculate simple interest using the formula
    const interest = (principal * rate * time) / 100;

    return `The simple interest is: ${interest.toFixed(1)}`;
}

// Test the function with given test cases and edge cases
function main() {
    const testCases = [
        { principal: 1000, rate: 5, time: 3, expected: "The simple interest is: 150.0" },
        { principal: 1500, rate: 7, time: 5, expected: "The simple interest is: 525.0" },
        { principal: 0, rate: 6, time: 2, expected: "The simple interest is: 0.0" },
        { principal: -1000, rate: 5, time: 3, expected: "Invalid input, all values must be non-negative." }
    ];

    testCases.forEach((test, index) => {
        const { principal, rate, time, expected } = test;
        const result = calculateSimpleInterest(principal, rate, time);

        console.log(`Test Case ${index + 1}: ${result}`);

        if (result !== expected) {
            console.error(`Test Case ${index + 1} failed: expected ${expected}, got ${result}`);
        }
    });
}

// Run the main function to test the code
main();