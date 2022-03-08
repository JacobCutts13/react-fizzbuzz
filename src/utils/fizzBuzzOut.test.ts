import fizzBuzzOut from "./fizzBuzzOut";

test("fizzBuzzOut takes in a number and returns how the number is said in the game", () => {
    expect(fizzBuzzOut(5)).toBe("Buzz");
    expect(fizzBuzzOut(76)).toBe("76");
  });