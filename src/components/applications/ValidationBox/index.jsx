import {useDispatch} from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import {validationSlice} from "../../../redux/validation/slice";
import validationBoxStyles from "../../../assets/jss/components/validationBox";


const ValidationBox = (props) => {
  const {className} = props;
  const {classes} = validationBoxStyles();
  const dispatch = useDispatch();

  return <Box className={className}>
    <Divider className={classes.divider}/>
    <Box className={classes.infoWrapper}>
      <Button
        className={classes.turnBackBtn} variant="contained" startIcon={<SportsEsportsIcon/>}
        onClick={() => dispatch(validationSlice.actions.setOpen(false))}>
        <Box className={"text"} component={"span"}/>
      </Button>
    </Box>
  </Box>
}

export default ValidationBox;
