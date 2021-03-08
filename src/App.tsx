import { useEffect, useContext, useState } from "react";
import Ruler from "./components/Rulers/Ruler";
import { MouseContext } from "./context/mouse-context";
import {
  Menu,
  MenuTrigger,
  ActionButton,
  Item,
  Provider,
} from "@adobe/react-spectrum";
import { lightTheme } from "@adobe/react-spectrum";
import Lightbox from "./components/Rulers/Lightbox";
import { useKeyPress } from "./hooks/useKeyPress";

function App() {
  const { cursorChangeHandler, cursorType } = useContext(MouseContext);
  const shiftKey = useKeyPress("Shift");

  const [selected, setSelected] = useState("");
  const [ruler, setRuler] = useState("");

  const menuItems = [
    { name: "Grey Bar" },
    { name: "Lightbox" },
    { name: "Shade" },
    { name: "Underline" },
  ];

  useEffect(() => {
    if (shiftKey) {
      setRuler(null);
    }
  }, [shiftKey, ruler]);

  useEffect(() => {
    switch (selected.anchorKey) {
      case "Grey Bar":
        setRuler("grey-bar");
        return;
      case "Lightbox":
        setRuler("lightbox");
        return;
      case "Shade":
        setRuler("shade");
        return;
      case "Underline":
        setRuler("underline");
        return;
      default:
        return;
    }
  }, [selected]);

  useEffect(() => {
    window.addEventListener("shift", (event) => {
      setRuler(null);
    });
  }, []);

  return (
    <div
      className='App'
      onMouseMove={() => {
        ruler !== null ? cursorChangeHandler(ruler) : cursorChangeHandler(null);
      }}
    >
      {cursorType === "lightbox" ? <Lightbox /> : <Ruler />}
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Provider theme={lightTheme}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "static",
            }}
          >
            <h1 style={{ marginBottom: "14px" }}>Digital Reading Rulers</h1>
            <MenuTrigger>
              <ActionButton>
                {ruler ? selected : "Select a reading ruler"}
              </ActionButton>
              {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
              {/* @ts-ignore */}
              <Menu
                selectionMode='single'
                selectedKeys={selected}
                onSelectionChange={setSelected}
                items={menuItems}
              >
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/* @ts-ignore */}
                {(item: any) => <Item key={item.name}>{item.name}</Item>}
              </Menu>
            </MenuTrigger>
            <p>Hit shift to turn off current ruler.</p>
          </div>
        </Provider>
      </div>
    </div>
  );
}

export default App;
