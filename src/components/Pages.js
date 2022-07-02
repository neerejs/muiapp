import React from 'react'
import { Container,Row, Col} from 'react-bootstrap';
import Navbar from './NavbarFeed';
import Sidebar from './Sidebar';
import { useState } from "react";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
const Pages = () => {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
    return (
      <>
      
        
         
          <Stack >
           
                <div>This is the Pages page</div>
             
          </Stack>
        

</>
    )
}

export default Pages
