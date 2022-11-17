import {makeStyles} from "tss-react/mui";
import {warningColor} from "../base/mainStyle";


const headerStyles = makeStyles()({
  root: {
    position: "fixed",
    width: 318,
    height: 34,
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row-reverse",
    zIndex: 3
  },
  button: {
    color: warningColor[5]
  }
});

export default headerStyles;
