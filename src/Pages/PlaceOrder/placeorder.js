import React, { useState } from 'react';
import PageHeader from '../../Components/PageHeader/pageHeader';
import { Grid, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

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
    orderNumber: {
        fontSize: '20px',
        fontWeight: '900',
        marginLeft: '15px',
        margin: '25px 0'
    },
    gridContainer: {
      display: 'flex',
      flexDirection: 'row',
      margin: '0 auto',
      width: '80%'
    },
    grid1: {
      margin: '20px',
      width: '45%'
    },
    textfield: {
      margin: '10px'
    },
    typography: {
      display: 'flex',
      flexDirection: 'row',
    },
    orderNumberfigure: {
      fontSize: '45px',
      fontWeight: '900',
      fontColor: 'grey'
    },
    button: {
      position: 'absolute',
      right: '13%'
    },
    formControl: {
      margin: '10px'
    }
  }));

export default function PlaceOrder() {
    const classes = useStyles();
    const [pageHeader, setpageHeader] = useState('Place Order');

  return (
    <React.Fragment>
       <PageHeader pageHeader={pageHeader}/>
        <Grid className={classes.typography}>
          <Typography className={classes.orderNumber}>Order Number :</Typography>
          <Typography className={classes.orderNumberfigure}>12</Typography>
        </Grid>
       <Grid className={classes.gridContainer}>
          <Grid className={classes.grid1}>
            <TextField label="Customer Name" id="customer-name" type='text' InputLabelProps={{shrink: true}} className={classes.textfield} fullWidth/>
            <TextField label="E-mail ID" id="email-id" type='email' InputLabelProps={{shrink: true}} className={classes.textfield} fullWidth/>
            <TextField label="Phone number" id="phone-number" type='number' InputLabelProps={{shrink: true}} className={classes.textfield} fullWidth/>
            <TextField label="Address" id="address" type='address' InputLabelProps={{shrink: true}} className={classes.textfield} fullWidth/>
          </Grid>

          <Grid className={classes.grid1}>
            <TextField label="Item Name" id="item-name" type='text' InputLabelProps={{shrink: true}} className={classes.textfield} fullWidth/>
          
            <FormControl className={classes.formControl} fullWidth InputLabelProps={{shrink: true}}>
              <InputLabel id="quantity" InputLabelProps={{shrink: true}}>Quantity</InputLabel>
              <Select
                labelId="quantity"
                id="quantity"
                // value={age}
                // onChange={handleChange}
              >
                <MenuItem value={10}>one</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl} fullWidth InputLabelProps={{shrink: true}}>
              <InputLabel id="units" InputLabelProps={{shrink: true}}>Units</InputLabel>
              <Select
                labelId="units"
                id="units"
                // value={age}
                // onChange={handleChange}
              >
                <MenuItem value={10}>one</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl} fullWidth InputLabelProps={{shrink: true}}>
              <InputLabel id="order-type" InputLabelProps={{shrink: true}}>Order Type</InputLabel>
              <Select
                labelId="order-type"
                id="order-type"
                // value={age}
                // onChange={handleChange}
              >
                <MenuItem value={10}>one</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>

          </Grid>
       </Grid>
       <Button variant="contained" color="primary" size="small" className={classes.button}>Save</Button>
    </React.Fragment>
  );
}
