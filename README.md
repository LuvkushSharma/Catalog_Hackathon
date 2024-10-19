# Shamir's Secret Sharing Simplified

This project implements a simplified version of **Shamir's Secret Sharing** algorithm using Lagrange interpolation. The goal is to decode a secret value (constant term 'c') from a set of encoded polynomial points provided in JSON format.

## Table of Contents
- [Introduction](#introduction)
- [Folder Structure](#folder-structure)
- [Algorithm Explanation](#algorithm-explanation)

## Introduction

Shamir's Secret Sharing algorithm is a way to divide a secret (in this case, a constant term 'c' of a polynomial) into parts. Each part is called a **share** and is represented as an encoded root of the polynomial.

Given at least `k` shares, you can reconstruct the original secret using interpolation techniques. This project decodes the given shares, uses Lagrange interpolation to find the secret, and prints it for each test case.

## Folder Structure

```bash
ShamirSecretSharing/
│
├── data/
│   ├── testcase1.json    # JSON file with the first test case
│   └── testcase2.json    # JSON file with the second test case
│
├── src/
│   ├── utils.js          # Utility functions (decoding & interpolation)
│   └── index.js          # Main entry point to read JSON and calculate the secret
│
└── package.json          # Node.js project file (optional)
```

# Algorithm Explanation
The algorithm decodes the given encoded points (x, y), where x is the key and y is the encoded value. The encoding of y depends on the given base (e.g., base 2, base 10, base 16).

# Decoding the Y Values
Each y value is stored in a different base (like binary, decimal, hexadecimal). We decode it using the parseInt function based on the provided base.

# Lagrange Interpolation
Once we have the decoded points, we use Lagrange interpolation to reconstruct the original polynomial. Specifically, we're interested in finding the constant term c, which is the secret. The interpolation formula ensures that with enough valid points, the constant can be solved.
