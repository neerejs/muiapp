import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
// import Rightbar from "./components/Rightbar";
import { Box, createTheme, Stack, ThemeProvider , Grid} from "@mui/material";
import NavbarFeed from "./components/NavbarFeed";
// import Add from "./components/Add";
import { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";

function App() {
  const [mode, setMode] = useState("light");

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
        
        {/* <Row>
          <Col>
            
          </Col>
        </Row> */}
      </Stack>
      </ThemeProvider>
    </>

  );
}

export default App;