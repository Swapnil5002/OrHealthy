import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import FadeIn from 'react-fade-in';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'recipename', headerName: 'Recipe name', width: 300 },
  { field: 'ingredientname', headerName: 'Ingredient name', width: 350 },
  {
    field: 'quantity',
    headerName: 'Quantity',
    type: 'number',
    width: 110,
  },
  {
    field: 'unit',
    headerName: 'Unit',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 80,
  },
  { field: 'sellingprice', headerName: 'Selling Price', width: 130 },
  { field: 'label', headerName: 'Label', width: 100 },
  { field: 'description', headerName: 'Description', width: 330 }
];

const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

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
      }
  }));

const AllRecipe = () => {
    const classes = useStyles();

  return (
      <React.Fragment>
        <FadeIn className={classes.fadeIn}>
            <Grid className={classes.container}>
                <Typography className={classes.profileText}>All Recipe</Typography>
            </Grid>
        </FadeIn>
        <div style={{ height: 550, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
      </React.Fragment>
    );
}

export default AllRecipe
