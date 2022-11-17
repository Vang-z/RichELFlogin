import {makeStyles} from "tss-react/mui";
import fonts from "../../images/fonts.png";


const validationBoxStyles = makeStyles()({
  divider: {
    position: "relative",
    width: 248,
    left: "calc((100% - 248px) / 2)",
    borderColor: `rgba(255, 255, 255, 0.42)`,
  },
  securityTitle: {
    width: 96,
    height: 36,
    backgroundImage: `url(${fonts})`,
    backgroundRepeat: "no-repeat",
    backgroundPositionX: 10,
    backgroundPositionY: -158,
    backgroundSize: "350%",
    margin: "0 auto"
  }
});

export default validationBoxStyles;
