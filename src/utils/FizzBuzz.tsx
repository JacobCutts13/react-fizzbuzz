import { useState } from "react";
import fizzBuzzOut from "./fizzBuzzOut";

export default function FizzBuzz(): JSX.Element {
  const [fizzBuzzArr, setfizzBuzzArr] = useState<string[]>([]);

  const handleNext = () =>
    setfizzBuzzArr((arr) => [...arr, fizzBuzzOut(arr.length + 1)]);

  return (
    <>
      <h1>FizzBuzz Game</h1>
      <p>{fizzBuzzArr}</p>
      <button onClick={handleNext}>Next number</button>
    </>
  );
}
