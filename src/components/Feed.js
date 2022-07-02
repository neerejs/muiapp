import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import * as contentful from 'contentful';
import {
    Grid, TableCell, TableRow, Table, TableHead, TableBody, Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Card,
    CardContent


} from '@mui/material';
import {
    AccountBox,
    Article,
    Group,
    Home,
    ModeNight,
    Person,
    Settings,
    Storefront,

} from "@mui/icons-material";
import Sidebar from './Sidebar';


const Feed = () => {

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
                    <Card className='boxes' >
                        <CardContent>
                            Number of Students:
                    <br></br>
                            {studentCount}
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item md={3} className="col-margin">
                    <Card className='boxes' >
                        <CardContent>
                            3.5+ GPA :
                        <br></br>
                            {gpaCount}
                        </CardContent>
                    </Card>
                </Grid>


                <Grid item md={3} className="col-margin">
                    <Card className='boxes' >
                        <CardContent>
                            Rutgers Students :
                        <br></br>
                            {rutgersCount}
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item md={3} className="col-margin">
                    <Card className='boxes' >
                        <CardContent>
                            Verified Students :
                        <br></br>
                            {verifiedCount}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>


        )

        return contentsArray;
    }

    return (
        <>
        
            <Grid container spacing={3}>
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
                    Right Panel
                </Grid>

            </Grid>
        </>
    )
}

export default Feed;