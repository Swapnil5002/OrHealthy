import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Typography, Grid, MenuItem, Button, FormControl, InputLabel, Select } from '@material-ui/core';
import FadeIn from 'react-fade-in';
import Avatar from '@material-ui/core/Avatar';
  
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
      fontWeight: '700',
      marginLeft: '20px'
    },
    fadeIn: {
        margin: '10px'
    },
    textfield: {
        width: '45%',
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
    formControl: {
        width: '46%',
        margin: '0 15px'
    },
    dropdown: {
        margin: '0 10px'
    },
    button: {
        display: 'flex',
        justifyContent: 'flexEnd',
    }   
}));

export default function AddRecipe() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('EUR');

  return (
    <React.Fragment>
        <FadeIn className={classes.fadeIn}>
            <Grid className={classes.container}>
                <Typography className={classes.profileText}>Add Recipe</Typography>
            </Grid>
        </FadeIn>
        <form className={classes.root} noValidate autoComplete="off">
        <Grid className={classes.form}>
            <div className={classes.grid}>
                <TextField id="name" label="Recipe Name" type="text" className={classes.textfield}/>
                <TextField id="ingredient" label="Ingredient Name" type="text" className={classes.textfield}/>
                <div className={classes.dropdown}>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="role">Units</InputLabel>
                            <Select
                            labelId="units"
                            id="units"
                            // value={age}
                            // onChange={handleChange}
                            >
                            <MenuItem value={10}>1</MenuItem>
                            <MenuItem value={20}>2</MenuItem>
                            </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="role">Quantity</InputLabel>
                            <Select
                            labelId="quantity"
                            id="quantity"
                            // value={age}
                            // onChange={handleChange}
                            >
                            <MenuItem value={10}>1</MenuItem>
                            <MenuItem value={20}>2</MenuItem>
                            </Select>
                    </FormControl>
                </div>
                <TextField id="ingredient" label="Ingredient Name" type="text" className={classes.textfield}/>
                <TextField id="selllingPrice" label="Selling Price" type="text" className={classes.textfield}>
                </TextField>
                {/* <FormControl className={classes.formControl}>
                    <InputLabel id="role">Quantity</InputLabel>
                        <Select
                        labelId="role"
                        id="role"
                        // value={age}
                        // onChange={handleChange}
                        >
                        <MenuItem value={10}>1</MenuItem>
                        <MenuItem value={20}>2</MenuItem>
                        </Select>
                </FormControl> */}
                
            </div>
            <div className={classes.grid}>
                <TextField id="description" label="Recipe Description/About" type="text" className={classes.textfield}/>
                <FormControl className={classes.formControl}>
                        <InputLabel id="role">Label</InputLabel>
                            <Select
                            labelId="quantity"
                            id="quantity"
                            // value={age}
                            // onChange={handleChange}
                            >
                            <MenuItem value={10}>Breakfast</MenuItem>
                            <MenuItem value={20}>Lunch</MenuItem>
                            <MenuItem value={10}>Dinner</MenuItem>
                            <MenuItem value={10}>Supper</MenuItem>
                            </Select>
                    </FormControl>
            </div>
            <div className={classes.button}>
                <Button variant="contained" color="primary" className={classes.saveButton}>Save</Button>
            </div>
        </Grid>
        </form>
    </React.Fragment>
  );
}
