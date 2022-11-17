import {useEffect} from "react";
import {window as tauriWindow} from "@tauri-apps/api";
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Layout from "./components/applications/Layout";
import theme from "./assets/jss/theme";


function App() {
  useEffect(() => {
    document.oncontextmenu = function (_) {
      return false;
    };
    const noDragSelector = "input, a, button";
    document.addEventListener("mousedown", async e => {
      if (e.target.closest(noDragSelector)) return;
      await tauriWindow.appWindow.startDragging();
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Layout/>
    </ThemeProvider>
  );
}

export default App;
