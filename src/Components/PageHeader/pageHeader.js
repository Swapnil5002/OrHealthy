import React from 'react';
import FadeIn from 'react-fade-in';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

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
        fontColor: 'grey',
        display: 'flex',
        flexDirectoin: 'row'
    },
    profileText: {
        fontSize: '40px',
        fontColor: 'grey',
        fontWeight: '800',
        marginLeft: '20px'
      },
    fadeIn: {
        margin: '10px'
    }
  }));

const PageHeader = ({ pageHeader }) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <FadeIn className={classes.fadeIn}>
                <Grid className={classes.container}>
                    <Typography className={classes.profileText}>{pageHeader}</Typography>
                </Grid>
            </FadeIn>
        </React.Fragment>
    )
}

export default PageHeader;