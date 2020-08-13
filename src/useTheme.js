import { memo } from "react";
import { useSelector } from "react-redux";

const basicDarkStyles = {
  backgroundColor: "black",
  color: "white"
};

const basicLightStyles = {
  backgroundColor: "white",
  color: "black"
};

const theme = {
  dark: {
    text: {
      ...basicDarkStyles
    },
    button: {
      ...basicDarkStyles
    }
  },
  light: {
    text: {
      ...basicLightStyles
    },
    button: {
      ...basicLightStyles
    }
  }
};

export default (userStyles) => {
  const { isDarkTheme } = useSelector((state) => state);
  const themeType = isDarkTheme ? "dark" : "light";
  const selectedTheme = theme[themeType];

  return selectedTheme;
};
