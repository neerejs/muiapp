import { createTheme, Stack, ThemeProvider , Grid} from "@mui/material";
import NavbarFeed from "./components/NavbarFeed";
import { useState } from "react";


function App() {
  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (

    <>
    <ThemeProvider theme={darkTheme}>
      
      <Stack >
          <Grid item>
          <NavbarFeed />
          </Grid>
      </Stack>
      </ThemeProvider>
    </>

  );
}

export default App;