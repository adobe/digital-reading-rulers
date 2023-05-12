/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

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
