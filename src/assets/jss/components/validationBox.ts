import {makeStyles} from "tss-react/mui";
import {grayColor, hexToRgb, successColor, warningColor} from "../base/mainStyle";
import fonts from "../../images/fonts.png";


const validationBoxStyles = makeStyles()({
  divider: {
    position: "relative",
    width: 248,
    left: "calc((100% - 248px) / 2)",
    borderColor: `rgba(255, 255, 255, 0.42)`,
    marginBottom: 6,
  },
  headerWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& .btn": {
      color: grayColor[4],
      "& button": {
        backgroundColor: `rgba(${hexToRgb(grayColor[6])}, 0.35)`,
        "&:hover": {
          backgroundColor: `rgba(${hexToRgb(grayColor[6])}, 0.65)`,
        },
      }
    },
    "& .title": {
      marginRight: 12,
    }
  },
  infoWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 20,
    marginTop: 6,
    marginBottom: 6,
  },
  fileWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 20,
    marginBottom: 6,
  },
  fileCount: {
    width: 70,
    height: 14,
    backgroundImage: `url(${fonts})`,
    backgroundRepeat: "no-repeat",
    backgroundPositionX: 0,
    backgroundPositionY: -68,
  },
  fileCountValue: {
    position: "relative",
    color: grayColor[4],
    top: 2,
    left: 2,
    fontSize: 13,
    cursor: "default",
    fontFamily: "JetBrainsMono",
  },
  fileSize: {
    width: 70,
    height: 14,
    backgroundImage: `url(${fonts})`,
    backgroundRepeat: "no-repeat",
    backgroundPositionX: -69,
    backgroundPositionY: -68,
  },
  fileSizeValue: {
    position: "relative",
    color: grayColor[4],
    top: 2,
    left: 2,
    fontSize: 13,
    cursor: "default",
    fontFamily: "JetBrainsMono",
  },
  progressWrapper: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    bottom: 3,
    width: 140,
    marginRight: 12,
    "&.update": {
      width: "100%",
      marginRight: 0,
    },
    "& .update": {
      position: "relative",
      display: "flex",
      justifyContent: "space-between",
      width: 286,
      height: 18,
      left: -34,
    }
  },
  info: {
    position: "relative",
    top: 2,
    left: -22,
    width: 186,
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    color: grayColor[4],
    fontSize: 12,
    fontFamily: "JetBrainsMono",
    transform: "scale(0.75)",
    cursor: "default",
  },
  progress: {
    borderRadius: 5,
    "& .MuiLinearProgress-bar": {
      borderRadius: 5,
    }
  },
  updateWrapper: {
    display: "flex",
    "& .title": {
      position: "relative",
      width: 70,
      height: 14,
      backgroundImage: `url(${fonts})`,
      backgroundRepeat: "no-repeat",
      "&.size": {
        backgroundPositionX: 0,
        backgroundPositionY: -82,
      },
      "&.speed": {
        backgroundPositionX: -69,
        backgroundPositionY: -82,
      }
    },
    "& .value": {
      position: "relative",
      top: 1,
      left: 1,
    },
  },
  infoBtn: {
    position: "relative",
    width: 68,
    height: 20,
    backgroundColor: grayColor[7],
    borderRadius: 3,
    "&:hover": {
      backgroundColor: grayColor[6],
    },
    "&.fast": {
      "& .text": {
        position: "absolute",
        width: 60,
        height: 14,
        top: 2,
        left: 4,
        backgroundImage: `url(${fonts})`,
        backgroundRepeat: "no-repeat",
        backgroundPositionX: -116,
        backgroundPositionY: -54,
      }
    },
    "&.full": {
      "& .text": {
        position: "absolute",
        width: 60,
        height: 14,
        top: 2,
        left: 4,
        backgroundImage: `url(${fonts})`,
        backgroundRepeat: "no-repeat",
        backgroundPositionX: -177,
        backgroundPositionY: -54,
      }
    },
    "&.update": {
      "& .text": {
        position: "absolute",
        width: 60,
        height: 14,
        top: 2,
        left: 2,
        backgroundImage: `url(${fonts})`,
        backgroundRepeat: "no-repeat",
        backgroundPositionX: -138,
        backgroundPositionY: -68,
      }
    }
  },
  footerWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 20,
    marginTop: 18,
  },
  versionWrapper: {
    display: "flex",
    flexDirection: "column",
    color: grayColor[4],
    fontSize: 12,
  },
  version: {
    position: "relative",
    left: -8,
    width: 60,
    height: 14,
    paddingLeft: 72,
    marginTop: 3,
    marginBottom: 3,
    backgroundImage: `url(${fonts})`,
    backgroundRepeat: "no-repeat",
    cursor: "default",
    transform: "scale(0.75)",
    "&.current": {
      backgroundPositionX: -138,
      backgroundPositionY: -82,
    },
    "&.latest": {
      backgroundPositionX: -0,
      backgroundPositionY: -96
    },
    "&.success": {
      color: successColor[0],
    },
    "&.warning": {
      color: warningColor[0],
    }
  },
  updateBtn: {
    position: "relative",
    width: 102,
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
      width: 74,
      height: 14,
      top: 2,
      left: 24,
      backgroundImage: `url(${fonts})`,
      backgroundRepeat: "no-repeat",
      backgroundPositionX: -140,
      backgroundPositionY: -68,
    }
  },
});

export default validationBoxStyles;
