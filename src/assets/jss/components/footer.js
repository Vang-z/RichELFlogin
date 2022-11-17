import {makeStyles} from "tss-react/mui";
import {grayColor} from "../base/mainStyle";


const footerStyles = makeStyles()({
  root: {
    height: 64,
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "center",
    "& span": {
      display: "flex",
      color: grayColor[4],
      fontSize: 12,
      cursor: "default",
    },
  },
  powerby: {
    display: "flex",
    justifyContent: "center",
  },
  tauriIcon: {
    width: "13px !important",
    height: "13px !important",
    margin: 2,
    marginLeft: 4,
    cursor: "pointer",
  },
  muiIcon: {
    width: "12px !important",
    height: "12px !important",
    margin: 2,
    marginLeft: 4,
    cursor: "pointer",
  },
  version: {
    position: "absolute",
    display: "flex",
    color: `rgba(255, 255, 255, 0.28) !important`,
    right: 10,
    bottom: 0,
    cursor: "pointer !important",
  }
});

export default footerStyles;
