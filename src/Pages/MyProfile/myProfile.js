import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Typography, Grid, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import FadeIn from 'react-fade-in';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '78%',
      margin: '0 auto'
    },
    form: {
        padding:  '30px 0',
    }
  },
  container: {
      padding: '30px',
      backgroundColor: '#dbebf1',
      borderRadius: '10px',
      fontColor: 'grey'
  },
  profileText: {
      fontSize: '40px',
      fontColor: 'grey',
      fontWeight: '700'
    },
    fadeIn: {
        margin: '10px'
    },
    textfield: {
        width: '45%',
        margin: '25px',
        fontSize: '20px'
    },
    saveButton: {
        fontWeight: '900',
        padding: '5px 50px'
    }
}));

export default function MyProfile() {
  const classes = useStyles();

  return (
    <React.Fragment>
        <FadeIn className={classes.fadeIn}>
            <Grid className={classes.container}>
                <Typography className={classes.profileText}>My Profile</Typography>
            </Grid>
        </FadeIn>
        <form className={classes.root} noValidate autoComplete="off">
        <Grid className={classes.form}>
            <div className={classes.grid}>
                <TextField id="name" label="Name" type="text" className={classes.textfield}/>
                <TextField id="age" label="Age" type="number" className={classes.textfield}/>
                <InputLabel id="role">Role</InputLabel>
                <Select
                    className={classes.textfield}
                    labelId="role"
                    id="role"
                    // value={age}
                    // onChange={handleChange}
                >
                <MenuItem value={10}>Admin</MenuItem>
                <MenuItem value={20}>User</MenuItem>
                </Select>
            </div>
            <div className={classes.grid}>
                <TextField id="email" label="E-mail" type="email" className={classes.textfield}/>
                <TextField id="address" label="Address" type="text" className={classes.textfield} multiline rows={3}/>
            </div>
            <Button variant="contained" color="primary" className={classes.saveButton}>Save</Button>
        </Grid>
        </form>
    </React.Fragment>
  );
}
