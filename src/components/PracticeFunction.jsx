import React, { useState, useEffect } from "react";
import Child from "./Child";

const PracticeFunction = () => {

  const arr = ["ew", "we", "frf", "ew"];

  const [flag, setFlag] = useState("wave flag");
  const [listing, setListing] = useState([]);

  useEffect(() => {
    console.log("confused af");
  }, [flag]);

  const showList = () => {
    setListing(
      arr.map((data, idx) => {
        return <li key={idx}>{data}</li>;
      })
    );
  };
  return (
    <>
      
      <ul>{listing.length == 0 ? flag : listing}</ul>
      
      <button
        onClick={() => {
          setFlag("keep waving");
          showList();
        }}
      >
        Click
      </button>
      <Child attr={flag}/>
    </>
  );
};

export default PracticeFunction;
