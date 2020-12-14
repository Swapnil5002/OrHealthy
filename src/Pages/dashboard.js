import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { Grid, Typography, CardMedia } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { Options } from '../lists'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '40%',
    margin: '80px auto',
    '& > *': {
      margin: theme.spacing(3),
      width: theme.spacing(30),
      height: theme.spacing(26)
    },
  },
  cardMedia: {

  }
}));

export default function Dashboard() {
  const classes = useStyles();
  let history = useHistory()

  const DashboardClick = (name, index) => {
    if(index === 0) {
      history.replace("/create-recipe")
    } else if (index === 1) {
      history.replace("/meal")
    } else if (index === 2) {
      history.replace("/write-a-blog")
    } else if (index === 3) {
      history.replace("/upload-a-file")
    }
  }

  return (
    <Grid className={classes.root}>
      {Options.map((paperTitle, index) => (
        <Paper elevation={3} square={false} key={index} onClick={() => DashboardClick(paperTitle.name, index)}>
            <CardMedia image={paperTitle.icon} title={paperTitle.icon} className={classes.cardMedia}/>
            <Typography>{paperTitle.name}</Typography>
        </Paper>
      ))}
    </Grid>
  );  
}