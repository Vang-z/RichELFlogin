import {makeStyles} from "tss-react/mui";
import fonts from "../../images/fonts.png";
import {grayColor} from "../base/mainStyle.js";


const validationBoxStyles = makeStyles()({
  divider: {
    position: "relative",
    width: 248,
    left: "calc((100% - 248px) / 2)",
    borderColor: `rgba(255, 255, 255, 0.42)`,
    marginBottom: 6,
  },
  infoWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 20,
    marginBottom: 12,
  },
  turnBackBtn: {
    position: "relative",
    width: 84,
    height: 20,
    backgroundColor: grayColor[7],
    borderRadius: 3,
    "&:hover": {
      backgroundColor: grayColor[6],
    },
    "& svg": {
      position: "absolute",
      top: 0,
      left: 2,
    },
    "& .text": {
      position: "absolute",
      width: 60,
      height: 14,
      top: 2,
      left: 24,
      backgroundImage: `url(${fonts})`,
      backgroundRepeat: "no-repeat",
      backgroundPositionX: -134,
      backgroundPositionY: -26,
    }
  },
});

export default validationBoxStyles;
