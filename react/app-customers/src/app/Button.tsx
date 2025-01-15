"use client";
import { useState } from "react";

interface ButtonProps {
  name: string;
  color: string;
}
export default function Button(props: ButtonProps) {
  const [count, setCount] = useState(0);

  function handleCount() {
    const newCount = count + 1;
    setCount(newCount);
  }

  return (
    <button
      onClick={handleCount}
      className={`p-4 roud xl w-fit ${props.color}`}
    >
      {props.name} | count: {count}
    </button>
  );
}
