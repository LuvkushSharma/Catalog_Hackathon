const fs = require("fs");
const path = require("path");
const { decodeValue, lagrangeInterpolation } = require("./utils");

// Function to read the test case JSON files
function readTestCase(filename) {
  const filePath = path.join(__dirname, "../data", filename);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContent);
}

// Function to process each test case and find the secret 'c'
function processTestCase(testcase) {
  const { keys, ...roots } = testcase;
  const points = [];

  // Extract the x and decoded y values from the JSON input
  Object.keys(roots).forEach((key) => {
    const x = parseInt(key, 10);
    const { base, value } = roots[key];
    const y = decodeValue(base, value);
    points.push([x, y]);
  });

  // Use Lagrange interpolation to find the constant term 'c'
  const secret = lagrangeInterpolation(points);
  return secret;
}

// Main function to handle both test cases
function main() {
  const testcase1 = readTestCase("testcase1.json");
  const testcase2 = readTestCase("testcase2.json");

  const secret1 = processTestCase(testcase1);
  const secret2 = processTestCase(testcase2);

  console.log("Secret for Testcase 1:", secret1);
  console.log("Secret for Testcase 2:", secret2);
}

// Run the main function
main();
