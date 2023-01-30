import Box from "@mui/material/Box";
import logoStyles from "../../../assets/jss/components/logo";

const Logo = () => {
  const {classes} = logoStyles();

  return (
    <Box className={classes.root} />
  )
}

export default Logo;
