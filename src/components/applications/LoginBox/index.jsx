import {useEffect, useState} from "react";
import {Command} from "@tauri-apps/api/shell";
import {appWindow} from "@tauri-apps/api/window";
import {useDispatch, useSelector} from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import {netlag} from "../../../utils/http";
import {loginSlice} from "../../../redux/login/slice";
import {securitySlice} from "../../../redux/security/slice";
import {validationSlice} from "../../../redux/validation/slice";
import loginBoxStyles from "../../../assets/jss/components/loginBox";
import {dangerColor, successColor, warningColor} from "../../../assets/jss/base/mainStyle";


const LoginBox = (props) => {
  const {className} = props;
  const {classes} = loginBoxStyles();
  const dispatch = useDispatch();
  const login = useSelector(s => s.login);
  const security = useSelector(s => s.security);
  const validation = useSelector(s => s.validation);
  const [state, setState] = useState({
    player: "0", ping: "---",
  });

  useEffect(() => {
    netlag().then(res => setState({...state, ping: res}))
      .catch(err => setState({...state, ping: err}));
  }, []);

  const handleClickAgreement = () => {
    dispatch(loginSlice.actions.setAgreement(!login.agreement));
  };

  const handleClickRememberMe = () => {
    const rememberMe = login.rememberMe;
    dispatch(loginSlice.actions.setRememberMe(!rememberMe));
  };

  const handleClickLogin = async () => {
    const param = "Wob6sxh/aBKZmdyU9ZV7FVXSBW/wDQ6QPgZthIC4+Li6v+K4rlXmB7Lqdr5fBLgHgLbmQyO8fPdAEmzk1ocNWFhY0bObAmkQBYTHUcqjCj/rDivB2ZPMPg0zNzEITA9VoEmUacY+n9j365yvG4oUUjD+j9WKs9ChUhiThQlwYge/s+dDU0xxgKz3StHAE9jV6aaiXBqzmtpF1UXZ4YdqN5uqdk9cKtiNQGGL5Q7fsBMpVkeHk/PBOfU2iORcMkqlU26SMiHT0zFJyNBX0ozDWKS0at9X5iPOQWeq2j88MVS+eQd/w2qbsG0d+JAR/5M3hKU8HX4u/9Aakv7GXXmY6g==";
    const command = await new Command('login', param)
    const child = await command.spawn();
    if (child.pid) await appWindow.hide();
  };

  const handleClickSecurity = () => {
    dispatch(securitySlice.actions.setOpen(true));
  };

  const handleClickValidation = () => {
    dispatch(validationSlice.actions.setOpen(true));
  };

  const pingColor = state.ping === "---" ? "inherit" : parseInt(state.ping) < 50 ? successColor[0] : parseInt(state.ping) < 200 ? warningColor[0] : dangerColor[2];

  return <Box className={className}>
    <Box className={classes.iptWrapper}>
      <Box className={classes.username}/>
      <TextField
        className={classes.ipt} variant={"filled"}
        value={login.username} tabIndex={-1} disabled={security.open || validation.open}
        onChange={event => dispatch(loginSlice.actions.setUsername(event.target.value))}/>
    </Box>
    <Box className={classes.iptWrapper}>
      <Box className={classes.pwd}/>
      <TextField
        className={classes.ipt} variant={"filled"} type={"password"}
        value={login.pwd} tabIndex={-1} disabled={security.open || validation.open}
        onChange={event => dispatch(loginSlice.actions.setPwd(event.target.value))}/>
    </Box>
    <Box className={classes.boxWrapper}>
      <Box className={classes.checkboxWrapper}>
        <Checkbox
          className={classes.checkbox} size={"small"} color={"error"}
          checked={login.agreement} tabIndex={-1}
          onClick={handleClickAgreement}/>
        <Box
          className={classes.agreement} component={"button"} tabIndex={-1}
          onClick={handleClickAgreement}/>
      </Box>
      <Box className={classes.checkboxWrapper}>
        <Checkbox
          className={classes.checkbox} size={"small"} color={"error"}
          checked={login.rememberMe} tabIndex={-1}
          onClick={handleClickRememberMe}/>
        <Box
          className={classes.rememberMe} component={"button"} tabIndex={-1}
          onClick={handleClickRememberMe}/>
      </Box>
    </Box>
    <Box className={classes.btnWrapper}>
      <Button
        className={classes.loginBtn} variant={"contained"} tabIndex={-1}
        disabled={!login.agreement || !login.username || !login.pwd}
        onClick={handleClickLogin}>
        <Box className={"text"} component={"span"}/>
      </Button>
    </Box>
    <Divider className={classes.divider}/>
    <Box className={classes.additionalBtnWrapper}>
      <Button
        className={classes.securityBtn} variant={"contained"} tabIndex={-1}
        onClick={handleClickSecurity}>
        <Box className={"text"} component={"span"}/>
      </Button>
      <Button
        className={classes.validateBtn} variant={"contained"} tabIndex={-1}
        onClick={handleClickValidation}>
        <Box className={"text"} component={"span"}/>
      </Button>
    </Box>
    <Box className={classes.additionalInfoWrapper}>
      <Box className={classes.infoWrapper}>
        <Box className={classes.player}/>
        <Box className={classes.playerCount}>1</Box>
      </Box>
      <Box className={classes.infoWrapper}>
        <Box className={classes.ping}/>
        <Box className={classes.pingValue} style={{color: pingColor}}>
          {state.ping === "---" ? state.ping : `${state.ping}ms`}
        </Box>
      </Box>
    </Box>
  </Box>
}

export default LoginBox;
