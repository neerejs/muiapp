import React from 'react'
import { useState } from "react";
import { createTheme, Stack, ThemeProvider } from "@mui/material";

const Pages = () => {
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

          <div>This is the Pages page</div>

        </Stack>
      </ThemeProvider>


    </>
  )
}

export default Pages
