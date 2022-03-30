import React, { useState, useEffect } from "react";

const EventListener = () => {
  const [name, setName] = useState("Kate");

  useEffect(() => {
    console.log("Mount");
  }, []);

  useEffect(() => {
    console.log("Update");
    // return () => {
    //     console.log("clean up");
    //   };
  }, [name]);

  useEffect(() => {
    console.log("Unmount");
    return () => {
      console.log("clean up");
    };
  }, []);

  return (
    <>
      {name}
      <button onClick={() => setName("Hello Kate")}>Change Name</button>
    </>
  );
};
export default EventListener;

