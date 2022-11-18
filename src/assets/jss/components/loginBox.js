import {makeStyles} from "tss-react/mui";
import {dangerColor, grayColor} from "../base/mainStyle.js";
import fonts from "../../images/fonts.png";


const loginBoxStyles = makeStyles()({
  iptWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 24,
    marginBottom: 6,
    "&.security": {
      marginBottom: 9,
    },
    "&.pwd": {
      marginTop: 6,
      justifyContent: "space-evenly",
    },
    "&.progress": {
      display: "initial",
      width: 178,
      margin: "0 auto",
      "& span": {
        borderRadius: 5,
      }
    }
  },
  username: {
    position: "relative",
    width: 36,
    height: 14,
    backgroundImage: `url(${fonts})`,
    backgroundRepeat: "no-repeat",
    backgroundPositionX: 0,
    backgroundPositionY: 2,
  },
  ipt: {
    position: "relative",
    top: 1,
    width: 178,
    backgroundColor: `rgba(255, 255, 255, 0.32)`,
    borderRadius: 3,
    "& input": {
      color: grayColor[11],
      padding: "4px 6px 3px",
      fontSize: 12,
      lineHeight: "20px",
      fontFamily: "JetBrainsMono",
      "&.Mui-disabled": {
        "WebkitTextFillColor": grayColor[11],
        cursor: "not-allowed",
        pointerEvents: "initial",
        "::selection": {
          background: "transparent",
        }
      }
    },
    "& .MuiFilledInput-root:before, .MuiFilledInput-root:after": {
      borderBottom: "none !important",
    }
  },
  pwd: {
    position: "relative",
    width: 36,
    height: 14,
    backgroundImage: `url(${fonts})`,
    backgroundRepeat: "no-repeat",
    backgroundPositionX: 0,
    backgroundPositionY: -12,
  },
  boxWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 24,
  },
  checkboxWrapper: {
    display: "flex",
    alignItems: "center",
  },
  checkbox: {
    color: grayColor[4],
    padding: 4,
  },
  agreement: {
    position: "relative",
    width: 66,
    height: 14,
    top: 1,
    backgroundColor: "transparent",
    backgroundImage: `url(${fonts})`,
    backgroundRepeat: "no-repeat",
    backgroundPositionX: -36,
    backgroundPositionY: 0,
    border: "none",
    cursor: "pointer",
  },
  rememberMe: {
    position: "relative",
    width: 66,
    height: 14,
    top: 1,
    backgroundColor: "transparent",
    backgroundImage: `url(${fonts})`,
    backgroundRepeat: "no-repeat",
    backgroundPositionX: -36,
    backgroundPositionY: -14,
    border: "none",
    cursor: "pointer",
  },
  btnWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 36,
    marginTop: 12,
    marginBottom: 12,
  },
  loginBtn: {
    position: "relative",
    width: 168,
    height: 36,
    backgroundColor: dangerColor[0],
    "&:hover": {
      backgroundColor: dangerColor[1],
    },
    "&.Mui-disabled": {
      backgroundColor: dangerColor[0],
      cursor: "not-allowed",
      pointerEvents: "initial",
    },
    "& .text": {
      width: 64,
      height: 14,
      backgroundImage: `url(${fonts})`,
      backgroundRepeat: "no-repeat",
      backgroundPositionX: -52,
      backgroundPositionY: -55,
    }
  },
  divider: {
    position: "relative",
    width: 248,
    left: "calc((100% - 248px) / 2)",
    borderColor: `rgba(255, 255, 255, 0.42)`,
  },
  additionalBtnWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 20,
    padding: "0 26px",
    marginTop: 12,
  },
  securityBtn: {
    position: "relative",
    width: 68,
    minWidth: 68,
    height: 20,
    backgroundColor: grayColor[7],
    borderRadius: 3,
    "&:hover": {
      backgroundColor: grayColor[6],
    },
    "& .text": {
      position: "absolute",
      width: 64,
      height: 14,
      backgroundImage: `url(${fonts})`,
      backgroundRepeat: "no-repeat",
      backgroundPositionX: 2,
      backgroundPositionY: -41,
    }
  },
  validateBtn: {
    position: "relative",
    width: 84,
    height: 20,
    backgroundColor: grayColor[7],
    backgroundImage: `url(${fonts})`,
    backgroundRepeat: "no-repeat",
    backgroundPositionX: 4,
    backgroundPositionY: -152,
    borderRadius: 3,
    "&:hover": {
      backgroundColor: grayColor[6],
    },
    "& .text": {
      position: "absolute",
      width: 76,
      height: 14,
      backgroundImage: `url(${fonts})`,
      backgroundRepeat: "no-repeat",
      backgroundPositionX: -63,
      backgroundPositionY: -41,
    }
  },
  additionalInfoWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 20,
    marginTop: 20,
  },
  infoWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 20,
  },
  player: {
    position: "relative",
    width: 72,
    height: 14,
    backgroundImage: `url(${fonts})`,
    backgroundRepeat: "no-repeat",
    backgroundPositionX: 0,
    backgroundPositionY: -27,
  },
  playerCount: {
    position: "relative",
    top: 1,
    width: 24,
    color: grayColor[4],
    fontSize: 13,
    cursor: "default",
  },
  ping: {
    position: "relative",
    width: 72,
    height: 14,
    backgroundImage: `url(${fonts})`,
    backgroundRepeat: "no-repeat",
    backgroundPositionX: -138,
    backgroundPositionY: -41,
  },
  pingValue: {
    position: "relative",
    top: 1,
    width: 40,
    fontSize: 13,
    cursor: "default",
  },
});

export default loginBoxStyles;
