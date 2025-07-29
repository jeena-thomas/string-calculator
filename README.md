# String Calculator – TDD Assessment

Welcome! This project is a part of the Incubyte Software Craftsperson recruitment process, designed to demonstrate my understanding and application of Test-Driven Development (TDD) principles.

## Objective

Build a simple String Calculator using TDD that can:

- Parse and sum numbers from a string input.
- Support custom and multiple delimiters.
- Throw informative errors for negative numbers.
- Ignore numbers greater than 1000.

## Features Implemented

| Feature                   | Description                                                       |
| :------------------------ | :---------------------------------------------------------------- |
| Empty Input               | Returns 0 for an empty string                                     |
| Single & Multiple Numbers | Handles any count of comma-separated or newline-separated numbers |
| Newline Delimiters        | Supports \n as a delimiter along with commas                      |
| Custom Delimiters         | Supports single, multi-character, and multiple delimiters         |
| Negative Numbers          | Throws an error listing all negative numbers                      |
| Ignore Large Numbers      | Ignores numbers greater than 1000                                 |

## Project Structure
    .
    ├── src/
    │   ├── stringCalculator.ts 
    ├── __tests__/
    │   └── stringCalculator.test.ts
    ├── package.json
    ├── jest.config.js
    ├── tsconfig.json
    └── README.md

## How to Run

1. Clone the Repo

    ```bash
    git clone https://github.com/<your-username>/string-calculator.git
    cd string-calculator
2. Install Dependencies
    ```bash
    npm install
3. Run Tests
    ```bash
    npm test

## Tech Stack
- Language: TypeScript
- Testing Framework: Jest
- Dev Environment: Node.js + VSCode

## Notes for Reviewer

- I used parseDelimiter, parseNumbers, and validateNumbers as helper functions to maintain clean separation of concerns and testability.
- Regular expressions are used safely and escaped to support custom and multi-character delimiters.
- All edge cases are handled, including empty input, multiple newlines, large numbers, and error messages for negatives.