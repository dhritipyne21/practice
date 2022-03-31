import React from "react";

const TestChild = ({ count }) => {
  return <div>Count : {count === 10 ? "Will not show count" : count}</div>;
};

export default TestChild;
