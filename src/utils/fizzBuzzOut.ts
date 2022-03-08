export default function fizzBuzzOut(n: number): string {
  let stringOut = "";
  let isFizz = false;
  if (n % 3 === 0) {
    stringOut += "Fizz";
    isFizz = true;
  }
  if (n % 5 === 0) {
    stringOut += "Buzz";
    isFizz = true;
  }
  return isFizz ? stringOut : n.toString();
}
