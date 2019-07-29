import React from "react";
import doll from "../../images/doll.jpeg";

export default () => {
  return (
    <div>
      <img
        src={doll}
        style={{ width: "200px", margin: "auto", display: "block" }}
        alt="Loading..."
      />
    </div>
  );
};