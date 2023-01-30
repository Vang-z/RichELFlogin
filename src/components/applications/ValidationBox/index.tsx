import React from "react";
import {useState} from "react";
import cx from "classnames";
import {useDispatch} from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import LinearProgress from "@mui/material/LinearProgress";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import {validationSlice} from "../../../redux/validation/slice";
import validationBoxStyles from "../../../assets/jss/components/validationBox";


const ValidationBox:React.FC<any> = (props) => {
  const {className} = props;
  const {classes} = validationBoxStyles();
  const [state, _] = useState({
    currentVersion: "0.11.20.α",
    latestVersion: "0.11.20.β",
  })
  const dispatch = useDispatch();

  return <Box className={className}>
    <Divider className={classes.divider}/>
    <Box className={classes.headerWrapper}>
      <Box className={"btn"}>
        <IconButton
          color={"inherit"}
          onClick={() => dispatch(validationSlice.actions.setOpen(false))}>
          <KeyboardReturnIcon/>
        </IconButton>
      </Box>
      <Box className={"title"}>
        <Box className={classes.fileWrapper}>
          <Box className={classes.fileCount}/>
          <Box className={classes.fileCountValue}>118679</Box>
        </Box>
        <Box className={classes.fileWrapper}>
          <Box className={classes.fileSize}/>
          <Box className={classes.fileSizeValue}>5.21GB</Box>
        </Box>
      </Box>
    </Box>
    <Box className={classes.infoWrapper}>
      <Box className={classes.progressWrapper}>
        <Box className={classes.info}
             component={"span"}>sprite_character_demonicswordsman_effect_grabblastblood.NPK</Box>
        <LinearProgress className={classes.progress} color={"warning"} variant="determinate" value={10}/>
      </Box>
      <Button className={cx(classes.infoBtn, "fast")} variant="contained">
        <Box className={"text"} component={"span"}/>
      </Button>
    </Box>
    <Box className={classes.infoWrapper}>
      <Box className={classes.progressWrapper}>
        <Box className={classes.info} component={"span"}>.单机血槽.NPK</Box>
        <LinearProgress className={classes.progress} color={"secondary"} variant="determinate" value={30}/>
      </Box>
      <Button className={cx(classes.infoBtn, "full")} variant="contained">
        <Box className={"text"} component={"span"}/>
      </Button>
    </Box>
    <Box className={classes.infoWrapper}>
      <Box className={cx(classes.progressWrapper, "update")}>
        <Box className={cx(classes.info, "update")}>
          <Box className={classes.updateWrapper}>
            <Box className={cx("title", "size")}/>
            <Box className={"value"} component={"span"}>168MB</Box>
          </Box>
          <Box className={classes.updateWrapper}>
            <Box className={cx("title", "speed")}/>
            <Box className={"value"} component={"span"}>1069KB/s</Box>
          </Box>
        </Box>
        <LinearProgress className={classes.progress} color={"success"} variant="buffer" value={30} valueBuffer={45}/>
      </Box>
    </Box>
    <Box className={classes.footerWrapper}>
      <Box className={classes.versionWrapper}>
        <Box className={cx({
          [classes.version]: true,
          "current": true,
          "success": state.currentVersion === state.latestVersion,
          "warning": state.currentVersion !== state.latestVersion,
        })}>{state.currentVersion}</Box>
        <Box className={cx(classes.version, "latest", "success")}>{state.latestVersion}</Box>
      </Box>
      <Button
        className={classes.updateBtn} variant="contained" startIcon={<SportsEsportsIcon/>}>
        <Box className={"text"} component={"span"}/>
      </Button>
    </Box>
  </Box>
}

export default ValidationBox;
