import React from 'react'
import { Switch, Route, BrowserRouter as Router } from "react-router-dom"
import Header from './Pages/header'
import Sidebar from './Pages/sidebar'
import Dashboard from './Pages/dashboard'
import Login from './Pages/login'
import CreateRecipe from './Pages/AddRecipe/addRecipe'
import WriteBlog from './Pages/WriteBlog'
import UploadFile from './Pages/UploadFiles'
import PlaceOrder from './Pages/PlaceOrder/placeorder'
import AllRecipe from './Pages/AllRecipe/allRecipe'
import AllOrders from './Pages/AllOrders/allOrders'
import DesignRecipe from './Pages/DesignRecipe/designRecipe'

const ProtectedRoute = ({ children, ...rest }) => {

  const routes = [
    {
      path: '/dashboard',
      chilComponent: () => <Dashboard/>
    },
    {
      path: '/place-order',
      chilComponent: () => <PlaceOrder/>
    },    
    {
      path: '/all-orders',
      chilComponent: () => <AllOrders/>
    },
    {
      path: '/design-recipe',
      chilComponent: () => <DesignRecipe/>
    },
    {
      path: '/write-a-blog',
      chilComponent: () => <WriteBlog/>
    },
    {
      path: '/upload-a-file',
      chilComponent: () => <UploadFile/>
    },
    {
      path: '/all-recipe',
      chilComponent: () => <AllRecipe/>
    }
  ];

  return (
    <Router>
        <Header/>
        <Sidebar/>
        <Switch>
            {routes.map((route, index) => (
              <Route
                {...rest}
                key={index}
                path={route.path}
                exact
                children={route.chilComponent}
              />
            ))}
        </Switch>
    </Router>
  );
}

export default ProtectedRoute;
