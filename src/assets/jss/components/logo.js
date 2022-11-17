import {makeStyles} from "tss-react/mui";
import logo from "../../../assets/images/logo.png";


const logoStyles = makeStyles()({
  root: {
    position: "relative",
    width: 210,
    minWidth: 210,
    maxWidth: 210,
    height: 210,
    minHeight: 210,
    maxHeight: 210,
    top: 0,
    backgroundImage: `url(${logo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    margin: "34px auto 0"
  }
});

export default logoStyles;
