import React, { useState, useEffect } from 'react';

import * as contentful from 'contentful';
import {
    Grid, TableCell, TableRow, Table, TableHead, TableBody, Box,
    Card,
    CardContent

} from '@mui/material';

import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { styled } from '@mui/material/styles';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';

import IconButton from '@mui/material/IconButton';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { createTheme,ThemeProvider } from "@mui/material";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const Feed = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const [students, setStudents] = useState([]);
    useEffect(() => {

        loadData();
        // eslint-disable-next-line
    }, []);

    const loadData = async () => {
        let contentfulClient = contentful.createClient({
            accessToken: '1EuIOgC3v2LcxuD2ambb2454ijXnjHKsheuWnPFjGPs',
            space: 'nvm4509pk8bp'
        });
        let PLAYER_CONTENT_TYPE_ID = 'students';

        contentfulClient.getEntries({
            content_type: PLAYER_CONTENT_TYPE_ID,
            order: '-fields.name',
        })
            .then((entry) => {

                console.log(entry.items)
                setStudents(entry.items)

            })


    }
    const [mode, setMode] = useState("dark");

    const darkTheme = createTheme({
      palette: {
        mode: mode,
      },
    });

    const getStudents = () => {
        let contentsArray = []
        let count = 0

        students.forEach((kid, ind) => {
            console.log(kid.fields.name)
            count += 1

            contentsArray.push(
                
                <TableRow>
                    <TableCell>{count}</TableCell>
                    <TableCell>{kid.fields.name}</TableCell>
                    <TableCell>{kid.fields.gpa}</TableCell>
                    <TableCell>{kid.fields.school}</TableCell>
                    <TableCell>{kid.fields.verified.toString()}</TableCell>



                </TableRow>
            )
        })
        return contentsArray;
    }

    const boxes = () => {
        let studentCount = 0
        let gpaCount = 0
        let contentsArray = []
        let rutgersCount = 0
        let verifiedCount = 0
        students.forEach((kid, ind) => {
            studentCount += 1;

            if (kid.fields.gpa >= 3.5) {
                gpaCount += 1
            }

            if (kid.fields.school === 'Rutgers University') {
                rutgersCount += 1
            }
            if (kid.fields.verified.toString() === 'true') {
                verifiedCount += 1
            }

        })


        contentsArray.push(


            <Grid container spacing={4}>
                <Grid item md={3} className="col-margin">
                    <Card className='boxes' sx={{ backgroundColor: "#8f5451" , textAlign:'center'}}>
                        <CardContent>
                            Number of Students: 
                    
                            {' '+studentCount}
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item md={3} className="col-margin">
                    <Card className='boxes' sx={{ backgroundColor: "#51688f" , textAlign:'center'}}>
                        <CardContent>
                            3.5+ GPA: 
                        
                            {' '+gpaCount}
                        </CardContent>
                    </Card>
                </Grid>


                <Grid item md={3} className="col-margin">
                    <Card className='boxes' sx={{ backgroundColor: "#578f51", textAlign:'center' }}>
                        <CardContent >
                            Rutgers Students: 
                        
                            {' '+rutgersCount}
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item md={3} className="col-margin">
                    <Card className='boxes' sx={{ backgroundColor: "#70518f" , textAlign:'center'}}>
                        <CardContent>
                            Verified Students: 
                        
                            {' '+verifiedCount}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>


        )

        return contentsArray;
    }

    return (
        <>
<Box>
            <Grid container spacing={3} sx={{backgroundColor:"black"}}>
                
                {/* <Grid item md={1}>

                </Grid> */}

                <Grid item md={9}>
                    {boxes()}


                    <Table>


                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>GPA</TableCell>
                                <TableCell>School</TableCell>
                                <TableCell>Verified</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {getStudents()}

                        </TableBody>
                    </Table>


                </Grid>

                <Grid item md={3}>
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab label="Notes" value="1" />
                                    <Tab label="Tasks" value="2" />
                                    <Tab label="Teams" value="3" />
                                </TabList>
                            </Box>
                            <TabPanel value="1">Notes Data</TabPanel>
                            <TabPanel value="2">Tasks Data</TabPanel>
                            <TabPanel value="3">Teams Data</TabPanel>
                        </TabContext>
                    </Box>

                    <div>
                        <Accordion sx={{marginBottom:"10px"}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Update 1</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{marginBottom:"10px"}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>Update 2</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{marginBottom:"10px"}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>Update 3</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        
                    </div>
                </Grid>

            </Grid>
            </Box>
        </>
    )
}

export default Feed;