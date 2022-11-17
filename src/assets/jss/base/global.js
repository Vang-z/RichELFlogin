import {grayColor} from "./mainStyle";

const root = {
  html: {
    scrollBehavior: "smooth",
    body: {
      backgroundColor: "transparent",
      color: grayColor[20],
      fontFamily: "JetBrainsMono, Arial, sans-serif",
      zIndex: 1,
    }
  },
  "*, *::before, *::after": {
    margin: 0,
    padding: 0,
  },
  "a, a:link, a:visited": {
    textDecoration: "none",
    color: grayColor[20],
  },
  "::selection": {
    background: `rgba(0, 0, 0, 0.32)`,
  }
};

export default root;
