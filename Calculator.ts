class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  }
}

// Example usage
const calculator = new Calculator();

console.log("Addition: " + calculator.add(5, 3));
console.log("Subtraction: " + calculator.subtract(10, 4));
console.log("Multiplication: " + calculator.multiply(2, 6));

try {
  console.log("Division: " + calculator.divide(10, 0));
} catch (error) {
  console.log("Error: " + error.message);
}
