import {makeStyles} from "tss-react/mui";
import {boxShadow, transition} from "../base/mainStyle";
import background from "../../images/background.png";


const layoutStyles = makeStyles()({
  root: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: 319,
    height: 530,
    top: 0,
    margin: "auto",
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    borderRadius: 10,
    opacity: 0.95,
    overflow: "hidden",
    ...boxShadow,
    "&:after": {
      content: "''",
      display: "block",
      position: "absolute",
      top: -240,
      left: -160,
      background: "white",
      width: 70,
      height: 1440,
      opacity: "20%",
      transform: "rotate(-45deg)"
    },
    "&:hover": {
      "&:after": {
        left: 1440,
        transition: "all 1800ms cubic-bezier(0.3, 1, 0.2, 1)",
      }
    }
  },
  mainWrapper: {
    position: "relative",
    width: 220,
    height: 530,
    marginTop: 18
  },
  wrapper: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    width: 220,
    height: 530,
    marginLeft: 49,
    ...transition,
  },
  login4securityWrapper: {
    marginLeft: "calc(49px + 150%) !important",
  },
  login4validationWrapper: {
    marginLeft: "calc(49px - 150%) !important",
  },
  securityWrapper: {
    marginLeft: "calc(49px - 150%) !important",
  },
  validateWrapper: {
    marginLeft: "calc(49px + 150%) !important",
  }
});

export default layoutStyles;
