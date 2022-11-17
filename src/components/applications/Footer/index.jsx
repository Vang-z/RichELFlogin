import {useEffect, useState} from "react";
import {getVersion} from "@tauri-apps/api/app";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import footerStyles from "../../../assets/jss/components/footer";
import TauriIcon from "../../../assets/images/tauri.png"
import MuiIcon from "../../../assets/images/mui.svg"


function Footer() {
  const {classes} = footerStyles();
  const [ver, setVer] = useState("0.0.");

  useEffect(() => {
    getVersion().then(ret => {
      setVer(ret);
    }).catch(_ => {
      setVer("-.-.-");
    })
  }, []);

  return <Box className={classes.root}>
    <Box component={"span"}>COPYRIGHT BY Vang-z. ALL RIGHTS RESERVED.</Box>
    <Box className={classes.powerby}>
      <Box component={"span"}>POWERED BY</Box>
      <Avatar className={classes.tauriIcon} variant="rounded" src={TauriIcon}/>
      <Box component={"span"}>&</Box>
      <Avatar className={classes.muiIcon} variant="rounded" src={MuiIcon}/>
    </Box>
    <Box className={classes.version} component={"span"}>Ver@{ver}</Box>
  </Box>
}

export default Footer;
