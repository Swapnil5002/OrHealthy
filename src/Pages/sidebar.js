import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MailIcon from '@material-ui/icons/Mail'
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { SidebarData } from '../lists'

const useStyles = makeStyles({
  list: {
    width: 300,
  },
  fullList: {
    width: 'auto',
  },
  listItem: {
    paddingTop: '10px'
  }
});

const Sidebar = ({ open, handleCloseDrawer }) => {
  const classes = useStyles();

  return (
    <div>
        <React.Fragment>
          <SwipeableDrawer
            anchor="left"
            open={open}
            onClose={handleCloseDrawer}
          >
        <div
          className={clsx(classes.list)}
          role="sidebar"
          onClick={handleCloseDrawer}
          onKeyDown={handleCloseDrawer}
        >
          <Typography>User Name</Typography>
          <List>
            {SidebarData.map((text, index) => (
              <ListItem button={true} key={index} component={Link} to={text.link} className={classes.listItem}>
                <ListItemIcon>{<MailIcon />}</ListItemIcon>
                <ListItemText primary={text.name} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </div>
          </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}

export default Sidebar;