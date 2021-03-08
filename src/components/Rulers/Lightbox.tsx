import React from "react";
import "./Ruler.css";
import useMousePosition from "../../hooks/useMousePosition";

const Lightbox = () => {
  const { y } = useMousePosition();

  return (
    <>
      <div
        className='ruler shade'
        style={{
          left: "0",
          top: "0",
          height: y - 14 + "px",
          position: "fixed",
        }}
      ></div>
      <div
        className='ruler lightbox'
        style={{
          left: "0",
          top: y + 14 + "px",
          right: "0",
          bottom: "0",
          position: "fixed",
        }}
      ></div>
    </>
  );
};

export default Lightbox;
