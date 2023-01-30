import {appWindow} from "@tauri-apps/api/window";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import headerStyles from "../../../assets/jss/components/header";


function Header() {
    const {classes} = headerStyles();

    return <Box className={classes.root}>
        <IconButton
            className={classes.button}
            size={"small"} tabIndex={-1}
            onClick={async () => {
                await appWindow.hide();
            }}>
            <CloseIcon/>
        </IconButton>
        <IconButton
            className={classes.button}
            size={"small"} tabIndex={-1}
            onClick={async () => {
                await appWindow.minimize();
            }}>
            <RemoveIcon/>
        </IconButton>
    </Box>
}

export default Header;