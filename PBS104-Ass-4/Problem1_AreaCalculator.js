function calculateTriangleArea(base, height) {
    // Check for invalid inputs
    if (base < 0 || height < 0) {
        return "Invalid number, base and height must be positive numbers.";
    }
    
    // Calculate the area
    const area = (base * height) / 2;
    return area;
}

function main() {
    // Test cases
    const testCases = [
        { base: 10, height: 5, expected: 25.0 },
        { base: 0, height: 15, expected: 0.0 },
        { base: 8, height: 0, expected: 0.0 },
        { base: -5, height: 10, expected: "Invalid number, base and height must be positive numbers." },
        { base: 5, height: -10, expected: "Invalid number, base and height must be positive numbers." }
    ];

    testCases.forEach((test, index) => {
        const { base, height, expected } = test;
        
        const result = calculateTriangleArea(base, height);
        
        // Print the result in the required format
        if (typeof result === 'number') {
            console.log(`Test Case ${index + 1}: The area of the triangle is: ${result}`);
        } else {
            console.log(`Test Case ${index + 1}: ${result}`);
        }
        
        // Verify the result
        if (result !== expected) {
            console.error(`Test Case ${index + 1} failed: expected ${expected}, got ${result}`);
        }
    });
}

main();