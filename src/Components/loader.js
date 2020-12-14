import React, { useState } from 'react'
import Loader from 'react-loader-spinner'
import { Backdrop } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const LoaderComponent = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(true)

    const handleClose = () => {
      setOpen(false);
    }

    return (
        <React.Fragment>
            <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                <Loader
                    type="Grid"
                    color="black"
                    height={100}
                    width={100}
                    timeout={3000}
                />
            </Backdrop>
        </React.Fragment>
    )
}

export default LoaderComponent