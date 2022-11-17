import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import validationBoxStyles from "../../../assets/jss/components/validationBox";


const ValidationBox = (props) => {
  const {className} = props;
  const {classes} = validationBoxStyles();

  return <Box className={className}>
    <Divider className={classes.divider}/>
        <Box className={classes.securityTitle}/>
  </Box>
}

export default ValidationBox;
