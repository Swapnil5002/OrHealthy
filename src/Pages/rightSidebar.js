import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import { Typography, Grid, Button, FormControlLabel, Checkbox, TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { formLabelList } from '../lists'

const useStyles = makeStyles({
  list: {
    width: 400,
    padding: '20px'
  },
  fullList: {
    width: 'auto',
  },
  listItem: {
    paddingTop: '10px'
  },
  swipeableDrawer: {
      padding: '30px',
      backgroundColor: 'whitesmoke'
  },
  rightBarSearch: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between'
  },
  typo: {
      fontSize: '25px',
      fontWeight: '700'
  }
});

const RightSidebar = () => {
  const classes = useStyles();
  const [rightDrawerOpen, setRightDrawerOpen] = useState(true)

  const handleCloseDrawer = () => {
    setRightDrawerOpen(false)
  }

  return (
    <Grid>
        <Grid>
            <Button variant="contained" color="primary" size='small' onClick={() => setRightDrawerOpen(true)}>Choose Ingredients</Button>
        </Grid>
        <React.Fragment>
        <SwipeableDrawer
         anchor="top"
         open={rightDrawerOpen}
         onClose={handleCloseDrawer}
         className={classes.swipeableDrawer}
        >
            <Typography className={classes.typo}>Choose ingredients from the list below:</Typography>
        <Grid className={classes.rightBarSearch}>
            <TextField id="outlined-search" label="Search field" type="search" variant="outlined" />
            <Button variant="contained" color="primary" size='small'>Save</Button>
        </Grid>

        <Grid
            className={clsx(classes.list)}
            role="sidebar"
            onClick={handleCloseDrawer}
            onKeyDown={handleCloseDrawer}
            >
            {formLabelList.map(val => (
            <List>
                <FormControlLabel
                    control={
                    <Checkbox
                        // checked={state.checkedB}
                        // onChange={handleChange}
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label={val.item}
                />
            </List>
            ))}
            <Divider />
            </Grid>
        </SwipeableDrawer>
        </React.Fragment>
    </Grid>
  );
}

export default RightSidebar;