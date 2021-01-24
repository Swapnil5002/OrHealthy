import React, { useState } from "react";
import PageHeader from '../../Components/PageHeader/pageHeader'
import { DataGrid } from '@material-ui/data-grid';

const columns = [
    { field: 'customerName', headerName: 'Customer Name', width: 200 },
    { field: 'Email', headerName: 'E-mail', width: 200 },
    { field: 'Phone-no', headerName: 'Phone number', type: 'number', width: 150 },
    {
      field: 'address',
      headerName: 'Address',
      width: 180,
    },
    {
      field: 'itemName',
      headerName: 'Item Name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 150,
    },
    { field: 'quantity', headerName: 'Quantity', type: 'number', width: 130 },
    { field: 'order-type', headerName: 'Order Type', width: 200 },
    { field: 'actions', headerName: 'Actions', width: 150 },
    { field: 'status', headerName: 'Status', width: 120 }
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
  

const AllOrders = () => {
    const [pageHeader, setPageHeader] = useState('All Orders')
    return (
        <React.Fragment>
            <PageHeader pageHeader={pageHeader}/>
            <div style={{ height: 550, width: '100%' }}>
                <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
            </div>
        </React.Fragment>
    )
}

export default AllOrders