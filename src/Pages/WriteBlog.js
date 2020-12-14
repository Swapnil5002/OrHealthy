import React from 'react'
import { TextField, Grid, Button, Typography, Chip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { DropzoneArea } from 'material-ui-dropzone'
import RightSidebar from './rightSidebar'
import AddIngredients from './addIngredients'
import FaceIcon from '@material-ui/icons/Face'

const useStyles = makeStyles({
    textField: {
        marginTop: '15px'
    },
    grid: {
        margin: '10px',
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        padding: '10px',
    },
    dropFile: {
        paddingTop: '10px'
    },
    buttonGrid: {
        paddingTop: '10px',
        display: 'flex',
        justifyContent: 'flex-end'
    },
    tyography: {
        fontSize: '30px',
        fontWeight: '500',
        marginBottom: '20px'
    },
    gridColumn: {
        display: 'flex',
        flexDirection: 'row'
    },
    tableContainer: {
        marginTop: '20px'
    },
    rightBar: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flexEnd',
        padding: '25px'
    },
    chip: {
        width: '25%',
        marginTop: '5%'
    },
    barButtons: {
        display: 'flex',
        flexDirection: 'row'
    }
  });

const WriteBlog = ()  => {
    const classes = useStyles();

    const handleClick = () => {
        console.log("Handle Click")
    }

    const  handleDelete = () => {
        console.log("Handle Delete")
    }

    return (
        <Grid className={classes.gridColumn}>
        <Grid className={classes.grid}>
            <Typography className={classes.tyography}>Choose ingredient and write your Blog:</Typography>

            <TextField id="outlined-basic" label="Blog Title" variant="outlined" InputLabelProps={{ shrink: true }} className={classes.textField}/>

            <TextField id="outlined-basic" label="Mini Blog" variant="outlined" InputLabelProps={{ shrink: true }} multiline rows={4} className={classes.textField}/>

            <TextField id="outlined-basic" label="Blog" variant="outlined" InputLabelProps={{ shrink: true }} multiline rows={8} className={classes.textField}/>

            <Grid className={classes.dropFile}>
                <DropzoneArea
                    acceptedFiles={['image/*', 'video/*', 'application/*']}
                    showFileNames
                    dropzoneText="Upload your file here"
                    showAlerts={true}
                    filesLimit={10}
                />
            </Grid>
            <Grid className={classes.buttonGrid}>
                <Button variant="contained" color="primary" size='small'>Save</Button>
            </Grid>
        </Grid>
        <Grid className={classes.rightBar}>
            <Grid className={classes.barButtons}>
                <RightSidebar/>
                <AddIngredients/>
            </Grid>

            <Chip
                icon={<FaceIcon />}
                label="Clickable deletable"
                onClick={handleClick}
                onDelete={handleDelete}
                className={classes.chip}
            />
        </Grid>
        </Grid>
    )
}

export default WriteBlog
