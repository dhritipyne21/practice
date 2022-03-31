import React, { useState } from "react";
import TestChild from "./TestChild";

const TestParent = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button
        onClick={() => setCount(count + 1)
        }
      >
        Increment
      </button>
      <TestChild count={count} />
    </>
  );
};

export default TestParent;
