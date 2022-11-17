import {useSelector} from "react-redux";
import cx from "classnames";
import Box from "@mui/material/Box";
import Header from "../Header";
import Logo from "../Logo";
import SecurityBox from "../SecurityBox";
import LoginBox from "../LoginBox";
import ValidationBox from "../ValidationBox";
import Footer from "../Footer";
import layoutStyles from "../../../assets/jss/components/layout";


const Layout = () => {
  const {classes} = layoutStyles();
  const security = useSelector(s => s.security);
  const validation = useSelector(s => s.validation);

  return <Box className={classes.root}>
    <Header/>
    <Logo/>
    <Box className={classes.mainWrapper}>
      <SecurityBox className={cx({
        [classes.wrapper]: true,
        [classes.securityWrapper]: !security.open
      })}/>
      <LoginBox className={cx({
        [classes.wrapper]: true,
        [classes.login4securityWrapper]: security.open,
        [classes.login4validationWrapper]: validation.open
      })}/>

      <ValidationBox className={cx({
        [classes.wrapper]: true,
        [classes.validateWrapper]: !validation.open
      })}/>
    </Box>
    <Footer/>
  </Box>
}

export default Layout;
