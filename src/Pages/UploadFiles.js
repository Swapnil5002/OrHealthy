import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
// import { DropzoneArea } from 'material-ui-dropzone'

const useStyles = makeStyles({
    grid: {
        width: '50%',
        margin: '0 auto',
        paddingTop: '150px'
    }
  });

const MenuDesign = ()  => {
    const classes = useStyles();

    return (
        <Grid className={classes.grid}>
        {/* <DropzoneArea
            acceptedFiles={['image/*', 'video/*', 'application/*']}
            showFileNames
            dropzoneText="Upload your file here"
            showAlerts={true}
            filesLimit={20}
        /> */}
        Menu Design
        </Grid>
    )
}

export default MenuDesign
