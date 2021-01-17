import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Typography, Grid, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import FadeIn from 'react-fade-in';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '78%',
      margin: '0 auto'
    }
  },
  container: {
       padding: '30px',
       backgroundColor: '#dbebf1',
       borderRadius: '10px',
       fontColor: 'grey',
       display: 'flex',
       flexDirectoin: 'row'
    },
    profileText: {
       fontSize: '40px',
       fontColor: 'grey',
       fontWeight: '700',
       marginLeft: '20px'
    },
    fadeIn: {
        margin: '10px'
    },
    textfield: {
        margin: '25px',
        fontSize: '20px',
        fontWeight: '900'
    },
    saveButton: {
        fontWeight: '900',
        padding: '5px 50px',
        width: '15%'
    },
    avatar: {
        marginTop: '10px'
    },
    dropdown: {
        width: '45%',
        marginLeft: '2%'
    },
    dropdownList: {
        width: '100%'
    },
    grid: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%'
    },
    form: {
        display: 'flex'
    },
    button: {
        display: 'flex',
        justifyContent: 'flexEnd',
    }
}));

export default function MyProfile() {
  const classes = useStyles();

  return (
    <React.Fragment>
        <FadeIn className={classes.fadeIn}>
            <Grid className={classes.container}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.avatar}/>
                <Typography className={classes.profileText}>My Profile</Typography>
            </Grid>
        </FadeIn>
        <form className={classes.root} noValidate autoComplete="off">
        <div className={classes.form}>
            <div className={classes.grid}>
                <TextField id="name" label="Name" type="text" className={classes.textfield}/>
                <TextField id="age" label="Age" type="number" className={classes.textfield}/>
                <TextField id="phone" label="Phone Number" type="number" className={classes.textfield}/>
            </div>
            <div className={classes.grid}>
                <TextField id="email" label="E-mail" type="email" className={classes.textfield}/>
                <TextField id="address" label="Address" type="text" className={classes.textfield}/>
                <TextField id="alias" label="Alias" type="text" className={classes.textfield}/>
            </div>
        </div>
        <div className={classes.button}>
            <Button variant="contained" color="primary" className={classes.saveButton}>Save</Button>
        </div>
        </form>
    </React.Fragment>
  );
}
