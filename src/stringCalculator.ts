function escapeRegExp(s: string) {
  // Escapes special regex characters
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }

  let delimiter = ",";
  let tempNumbers = numbers;

  // Check for custom delimiter
  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    delimiter = numbers.substring(2, delimiterEndIndex);
    tempNumbers = numbers.substring(delimiterEndIndex + 1);

    // Check if delimiter is wrapped in brackets and remove them
    if (delimiter.startsWith("[") && delimiter.endsWith("]")) {
      delimiter = delimiter.slice(1, -1);
    }
  }
  
  // Replace newlines and custom delimiters with commas
  const normalizedNumbers = tempNumbers
  .replace(/\n/g, ",")
  .replace(new RegExp(escapeRegExp(delimiter), "g"), ",");
  
  const numbersArray = normalizedNumbers.split(",").map((num) => parseInt(num));

   // Check for negative numbers
  const negativeNumbers = numbersArray.filter(num => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(',')}`);
  }
  

  return numbersArray.reduce((sum, i) => sum + i, 0);
}
