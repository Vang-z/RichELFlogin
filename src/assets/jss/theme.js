import {createTheme} from "@mui/material/styles";
import globals from "./base/global";
import JetBrainsMono from "../fonts/JetBrainsMono.ttf";


const JetBrainsMonoFace = {
  fontFamily: "JetBrainsMono",
  fontStyle: "normal",
  fontWeight: 400,
  src: `url("${JetBrainsMono}")`,
}

export default createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...globals,
        "@font-face": [JetBrainsMonoFace],
      },
    },
  }
});
