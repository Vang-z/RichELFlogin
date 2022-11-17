import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import cx from "classnames";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import RandomProgress from "../../base/RandomProgress/index";
import {CAPTCHA_COUNTDOWN} from "../../../utils/utils";
import {loginSlice} from "../../../redux/login/slice";
import {securitySlice} from "../../../redux/security/slice";
import {progressSlice} from "../../../redux/progress/slice";
import securityBoxStyles from "../../../assets/jss/components/securityBox";


const SecurityBox = (props) => {
  const {className} = props;
  const {classes} = securityBoxStyles();
  const dispatch = useDispatch();
  const login = useSelector(s => s.login);
  const security = useSelector(s => s.security);
  const progress = useSelector(s => s.progress);
  const [captchaCountdown, setCaptchaCountdown] = useState(CAPTCHA_COUNTDOWN);

  useEffect(() => {
    const timer = setInterval(() => {
      const value = progress.value;
      if (value === 100) {
        clearInterval(timer);
        setTimeout(() => {
          dispatch(securitySlice.actions.setProgress(false));
          if (security.result === "success") handleClickDiscardPwd();
          else dispatch(progressSlice.actions.setValue(0));
        }, 1500);
      }
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, [progress]);

  const handleClickCaptcha = () => {
    const timer = setInterval(() => {
      setCaptchaCountdown(countdown => {
        if (countdown <= 0) {
          clearInterval(timer);
          return CAPTCHA_COUNTDOWN;
        }
        return countdown - 1;
      });
    }, 1000);
  }


  const handleClickChangePwd = () => {
    dispatch(securitySlice.actions.setProgress(true));
  }

  const handleClickDiscardPwd = () => {
    dispatch(securitySlice.actions.clear());
    dispatch(progressSlice.actions.setValue(0));
  }

  return <Box className={className}>
    <Divider className={classes.divider}/>
    <Box className={classes.securityTitle}/>
    <Box className={cx(classes.iptWrapper, "security")}>
      <Box className={classes.username}/>
      <TextField
        className={classes.securityIpt} variant={"filled"}
        value={login.username} tabIndex={-1} disabled={!security.open || security.progress}
        onChange={event => dispatch(loginSlice.actions.setUsername(event.target.value))}/>
    </Box>
    <Box className={cx(classes.iptWrapper, "security")}>
      <Box className={classes.pwd}/>
      <TextField
        className={classes.securityIpt} variant={"filled"} type={"password"}
        value={security.pwd} tabIndex={-1} disabled={!security.open || security.progress}
        onChange={event => dispatch(securitySlice.actions.setPwd(event.target.value))}/>
    </Box>
    <Box className={cx(classes.iptWrapper, "security")}>
      <Box className={classes.newPwd}/>
      <TextField
        className={classes.securityIpt} variant={"filled"} type={"password"}
        value={security.newPwd} tabIndex={-1} disabled={!security.open || security.progress}
        onChange={event => dispatch(securitySlice.actions.setNewPwd(event.target.value))}/>
    </Box>
    <Box className={cx(classes.iptWrapper, "security")}>
      <Box className={classes.captcha}/>
      <TextField
        className={cx(classes.securityIpt, "captcha")}
        variant={"filled"} value={security.captcha} tabIndex={-1} disabled={!security.open || security.progress}
        onChange={event => dispatch(securitySlice.actions.setCaptcha(event.target.value))}/>
      <Button
        className={cx({
          [classes.captchaBtn]: true,
          "normal": captchaCountdown === CAPTCHA_COUNTDOWN
        })} variant={"contained"}
        tabIndex={-1} disabled={!security.open || security.progress || captchaCountdown < CAPTCHA_COUNTDOWN}
        onClick={handleClickCaptcha}>
        {captchaCountdown < CAPTCHA_COUNTDOWN && <span>{captchaCountdown}s</span>}
      </Button>
    </Box>
    <Box className={cx(classes.iptWrapper, "security", "pwd")}>
      <Button
        className={cx(classes.pwdBtn, "change")} variant={"contained"}
        tabIndex={-1} disabled={!security.open || security.progress}
        onClick={handleClickChangePwd}/>
      <Button
        className={cx(classes.pwdBtn, "discard")} variant={"contained"}
        tabIndex={-1} disabled={!security.open || security.progress}
        onClick={handleClickDiscardPwd}/>
    </Box>
    {security.progress && <Box
      className={cx(classes.iptWrapper, "security", "progress")}>
      <RandomProgress color={"error"}/>
      {progress.value === 100 && <Box className={cx(classes.progressInfo, security.result)}/>}
    </Box>}
  </Box>
}

export default SecurityBox;
