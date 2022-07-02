// import { Mail, Notifications } from "@mui/icons-material";
// import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
// import {
//     AppBar,
//     styled,
//     Toolbar,
//     Typography,
//     InputBase,
//     Box,
//     Badge,
//     Avatar,
//     Menu,
//     MenuItem

// } from "@mui/material";
// import React, { useState } from "react";

// const StyledToolbar = styled(Toolbar)({
//     display: "flex",
//     justifyContent: "space-between"
// });

// const Search = styled("div")(({ theme }) => ({
//     backgroundColor: "white",
//     padding: "0 10px",
//     borderRadius: theme.shape.borderRadius,
//     width: "40%",
// }));

// const Icons = styled(Box)(({ theme }) => ({
//     display: "none",
//     alignItems: "center",
//     gap: "20px",
//     [theme.breakpoints.up("sm")]: {
//         display: "flex",
//     },
// }));

// const UserBox = styled(Box)(({ theme }) => ({
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
//     [theme.breakpoints.up("sm")]: {
//         display: "none",
//     },
// }));

// const Navbar = () => {


//     const [open, setOpen] = useState(false);
//     return (
//         <AppBar position="sticky">
//             <StyledToolbar>
//                 <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
//                     Neerej's Site
//                 </Typography>
//                 <AllInclusiveIcon sx={{ display: { xs: "block", sm: "none" } }} />
//                 <Search>
//                     <InputBase placeholder="search..." />
//                 </Search>
//                 <Icons>
//                     <Badge badgeContent={4} color="error">
//                         <Mail />
//                     </Badge>
//                     <Badge badgeContent={2} color="error">
//                         <Notifications />
//                     </Badge>
//                     <Avatar
//                         sx={{ width: 30, height: 30 }}
//                         src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//                         onClick={(e) => setOpen(true)}
//                     />
//                 </Icons>
//                 <UserBox onClick={(e) => setOpen(true)}>
//                     <Avatar
//                         sx={{ width: 30, height: 30 }}
//                         src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//                     />
//                     <Typography variant="span">John</Typography>
//                 </UserBox>
//             </StyledToolbar>
//             <Menu
//                 id="demo-positioned-menu"
//                 aria-labelledby="demo-positioned-button"
//                 open={open}
//                 onClose={(e) => setOpen(false)}
//                 anchorOrigin={{
//                     vertical: "top",
//                     horizontal: "right",
//                 }}
//                 transformOrigin={{
//                     vertical: "top",
//                     horizontal: "right",
//                 }}
//             >
//                 <MenuItem>Profile</MenuItem>
//                 <MenuItem>My account</MenuItem>
//                 <MenuItem>Logout</MenuItem>
//             </Menu>
//         </AppBar>
//     )
// }

// export default Navbar


import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Feed from './Feed.js';
import Pages from './Pages.js';
import './Navbar.css';
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

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function NavbarFeed() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                    Neerej Site with MUI
          </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="home">
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary="Homepage" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="pages">
                            <ListItemIcon>
                                <Article />
                            </ListItemIcon>
                            <ListItemText primary="Pages" />
                        </ListItemButton>
                    </ListItem>
                </List>

            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Pages />
                
            </Box>
        </Box>
    );
}
