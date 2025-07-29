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
    const delimiter = numbers.substring(2, delimiterEndIndex);
    const numbersString = numbers.substring(delimiterEndIndex + 1);

    // Check if delimiter is wrapped in brackets (for multi-character delimiters)
    if (delimiter.startsWith("[") && delimiter.endsWith("]")) {
      const delimiterMatches = delimiter.match(/\[([^\]]+)\]/g);
      if (delimiterMatches) {
        const delimiters = delimiterMatches.map((match) =>
          escapeRegExp(match.slice(1, -1))
        );
        return { delimiter: delimiters.join("|"), numbersString };
      }
    }

    return { delimiter, numbersString };
  }

  return { delimiter: ",", numbersString: numbers };
};

// Helper function to parse numbers from string and ignore invalid entrie
const parseNumbers = (numbersString: string, delimiter: string): number[] => {
  const normalizedNumbers = numbersString
    .replace(/\n/g, ",")
    .replace(new RegExp(delimiter, "g"), ",");

  return normalizedNumbers
    .split(",")
    .map((num) => parseInt(num))
    .filter((n) => !isNaN(n) && n <= 1000);
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
