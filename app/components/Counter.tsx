"use client";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="text-green-300 text-4xl">🔢Counter: {count}</h1>
      <button
        className="py-2 px-4 rounded-md bg-green-500 text-white hover:bg-green-700"
        onClick={() => setCount(count + 1)}
      >increment</button>
    </div>
  );
}

export default Counter;
