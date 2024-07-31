function compareNumbers(number1, number2) {
    if (number1 > number2) {
        return `${number1} is larger than ${number2}`;
    } else if (number1 < number2) {
        return `${number2} is larger than ${number1}`;
    } else {
        return "Both numbers are equal";
    }
}

// Test the function with given test cases and edge cases
function main() {
    const testCases = [
        { number1: 5, number2: 10, expected: "10 is larger than 5" },
        { number1: 7, number2: 7, expected: "Both numbers are equal" },
        { number1: -1, number2: -10, expected: "-1 is larger than -10" },
        { number1: 0, number2: 0, expected: "Both numbers are equal" }
    ];

    testCases.forEach((test, index) => {
        const { number1, number2, expected } = test;
        const result = compareNumbers(number1, number2);

        console.log(`Test Case ${index + 1}: ${result}`);

        if (result !== expected) {
            console.error(`Test Case ${index + 1} failed: expected ${expected}, got ${result}`);
        }
    });
}

// Run the main function to test the code
main();