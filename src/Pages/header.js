import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import { Grid, Toolbar, AppBar } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Sidebar from './sidebar'
import OrhealthyLogo from '../assets/OrhealthyLogo.jpg'
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  logo: {
    width: '10%',
    padding: '0 15px'
  },
  root: {
    flexGrow: 1
  },
  appBar: {
    color: 'black',
    backgroundColor: 'white'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'grey'
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  },
  inputRoot: {
    color: 'white',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false)
  let history = useHistory()

  const handleOpenDrawer = () => {
    setOpen(true)
  }

  const handleCloseDrawer = () => {
    setOpen(false)
  }

  const handleHeaderClick = () => {
    history.replace('/dashboard')
  }

  return (
    <div className={classes.root}>
      <Sidebar open={open} handleCloseDrawer={handleCloseDrawer}/>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleOpenDrawer}
          >
            <MenuIcon />
          </IconButton>
          {/* <Grid className={classes.title} variant="h6" onClick={handleHeaderClick} noWrap>
            <img src={OrhealthyLogo} alt="Image" className={classes.logo}/>
          </Grid> */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;