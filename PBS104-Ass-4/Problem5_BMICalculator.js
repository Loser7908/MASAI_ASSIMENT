function calculateBMI(weight, height) {
    // Check for invalid input
    if (weight < 0 || height <= 0) {
        if (height === 0) {
            return "Invalid input, height cannot be zero.";
        }
        return "Invalid input, height and weight must be positive numbers.";
    }

    // Calculate BMI using the formula
    const bmi = weight / (height * height);

    return `Your BMI is: ${bmi.toFixed(2)}`;
}

// Test the function with given test cases and edge cases
function main() {
    const testCases = [
        { weight: 70, height: 1.75, expected: "Your BMI is: 22.86" },
        { weight: 55, height: 1.60, expected: "Your BMI is: 21.48" },
        { weight: 90, height: 1.80, expected: "Your BMI is: 27.78" },
        { weight: -70, height: 1.75, expected: "Invalid input, height and weight must be positive numbers." },
        { weight: 70, height: 0, expected: "Invalid input, height cannot be zero." }
    ];

    testCases.forEach((test, index) => {
        const { weight, height, expected } = test;
        const result = calculateBMI(weight, height);

        console.log(`Test Case ${index + 1}: ${result}`);

        if (result !== expected) {
            console.error(`Test Case ${index + 1} failed: expected ${expected}, got ${result}`);
        }
    });
}

// Run the main function to test the code
main();