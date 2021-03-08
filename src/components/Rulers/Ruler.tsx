import React, { useContext } from "react";
import "./Ruler.css";
import useMousePosition from "../../hooks/useMousePosition";
import { MouseContext } from "../../context/mouse-context";

/**
 * Ruler Componen is used to render rulers
 * Grey Bar, Shade, and Underline.
 *
 * @returns ruler mouse cursor
 */
const Ruler = () => {
  const { cursorType } = useContext(MouseContext);
  const { y } = useMousePosition();

  const getRulerHeight = () => {
    if (cursorType === "lightbox" || cursorType === "shade") {
      return y + 14;
    } else if (cursorType === "underline") {
      return 2;
    } else if (cursorType === "grey-bar") {
      return 20;
    }
  };

  return (
    <>
      {cursorType ? (
        <div
          className={"ruler " + cursorType}
          style={{
            left: "0",
            top: cursorType === "shade" ? "0" : `${y}px`,
            height: getRulerHeight() + "px",
            position: cursorType === "shade" && "fixed",
            bottom: cursorType === "shade" && getRulerHeight() - 100 + "px",
          }}
        ></div>
      ) : null}
    </>
  );
};

export default Ruler;
