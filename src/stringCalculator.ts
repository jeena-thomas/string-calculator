// Helper function to escape regex characters
const escapeRegExp = (s: string): string => {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

//Helper function to parse the delimiter from the input string
const parseDelimiter = (
  numbers: string
): { delimiter: string; numbersString: string } => {
  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    let delimiter = numbers.substring(2, delimiterEndIndex);

    // Check if delimiter is wrapped in brackets (for multi-character delimiters)
    if (delimiter.startsWith("[") && delimiter.endsWith("]")) {
      delimiter = delimiter.slice(1, -1);
    }

    const numbersString = numbers.substring(delimiterEndIndex + 1);
    return { delimiter, numbersString };
  }

  return { delimiter: ",", numbersString: numbers };
};

// Helper function to parse numbers from string
const parseNumbers = (numbersString: string, delimiter: string): number[] => {
  const normalizedNumbers = numbersString
    .replace(/\n/g, ",")
    .replace(new RegExp(escapeRegExp(delimiter), "g"), ",");

  return normalizedNumbers.split(",").map((num) => parseInt(num));
};

// Helper function to validate numbers (check for negatives)
const validateNumbers = (numbers: number[]): void => {
  const negativeNumbers = numbers.filter((num) => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      `Negative numbers not allowed: ${negativeNumbers.join(",")}`
    );
  }
};

export function add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }

  const { delimiter, numbersString } = parseDelimiter(numbers);
  const numbersArray = parseNumbers(numbersString, delimiter);
  validateNumbers(numbersArray);

  return numbersArray.reduce((sum, i) => sum + i, 0);
}
