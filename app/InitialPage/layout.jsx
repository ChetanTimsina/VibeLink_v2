import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <div
        style={{
          color: "red",
          position: "fixed",
          top: "0",
          left: "0",
          height: "7vw",
          backgroundColor: "#f2f4f7",
          zIndex: "20",
          width: "100%",
        }}
      ></div>
      {children}
    </div>
  );
};

export default layout;
