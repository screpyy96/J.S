"use client"

import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#2196f3', // Set your desired background color
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 200,
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column', // Set the direction to column for a vertical list on mobile
      width: 100
    },
  },
  drawer: {
    [theme.breakpoints.down('sm')]: {
      backgroundColor: '#f0f0f0'
    },
  },
  listItem: {
    padding: theme.spacing(1),
    textAlign: 'center', // Center the text in the list items
    textDecoration: 'none',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      color: 'black'
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const menuItems = (
    <List className={classes.list}>
            <Link href="/" className={classes.link}>
              <ListItem button className={classes.listItem}>
                <ListItemText primary="Home" />
              </ListItem>
            </Link>
            <Link href="/about" className={classes.link}>
              <ListItem button className={classes.listItem}>
                <ListItemText primary="About" className={classes.link}/>
              </ListItem>
            </Link>
            <Link href="/contact" className={classes.link}>
              <ListItem button className={classes.listItem}>
                <ListItemText primary="Contact" />
              </ListItem>
            </Link>
            {/* Add more navigation items as needed */}
          </List>
  );

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          J.S Painting | London
        </Typography>
        
        {/* Hamburger Icon for Mobile */}
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer} classes={{paper: classes.drawer}}>
              {menuItems}
            </Drawer>
          </>
        ) : (
          // Display the list on desktop screens
          <List className={classes.list}>
            <Link href="/" className={classes.link}>
              <ListItem button className={classes.listItem}>
                <ListItemText primary="Home" />
              </ListItem>
            </Link>
            <Link href="/about" className={classes.link}>
              <ListItem button className={classes.listItem}>
                <ListItemText primary="About" />
              </ListItem>
            </Link>
            <Link href="/contact" className={classes.link}>
              <ListItem button className={classes.listItem}>
                <ListItemText primary="Contact" />
              </ListItem>
            </Link>
            {/* Add more navigation items as needed */}
          </List>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
