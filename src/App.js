import React, { memo, useCallback } from "react";
import { useDispatch } from "react-redux";

import useTheme from "./useTheme";

import "./styles.css";
import { toggleTheme } from "./store";

const App = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const onThemeChange = useCallback(() => dispatch(toggleTheme()), [dispatch]);

  return (
    <div>
      <button
        style={theme["text"]}
        className="btn-class"
        onClick={onThemeChange}
      >
        button
      </button>

      <p style={theme["text"]} className="p-class">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
};

export default memo(App);
