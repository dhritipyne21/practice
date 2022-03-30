import React, { useState } from "react";

const BasicJSX = () => {
  const [flag, setFlag] = useState(false);
  return (
    <>
      <div className="fun">Basic JSX</div>
      {flag &&  (<div style={{ textTransform: "capitalize" }}>hello</div>)}
      { !flag ? (<div style={{ textTransform: "capitalize" }}>hi</div>):(<div style={{ textTransform: "capitalize" }}>bye</div>)}
    </>
  );
};

export default BasicJSX;
