import React from 'react'
import { Switch, Route, BrowserRouter as Router } from "react-router-dom"
import Header from './Pages/header'
import Sidebar from './Pages/sidebar'
import Dashboard from './Pages/dashboard'
import Login from './Pages/login'
import CreateRecipe from './Pages/addRecipe'
import WriteBlog from './Pages/WriteBlog'
import UploadFile from './Pages/UploadFiles'
import MyProfile from './Pages/MyProfile/myProfile'

const ProtectedRoute = ({ children, ...rest }) => {

  const routes = [
    {
      path: '/dashboard',
      chilComponent: () => <Dashboard/>
    },
    {
      path: '/login',
      chilComponent: () => <Login/>
    },
    {
      path: '/add-recipe',
      chilComponent: () => <CreateRecipe/>
    },
    {
      path: '/my-profile',
      chilComponent: () => <MyProfile/>
    },
    {
      path: '/write-a-blog',
      chilComponent: () => <WriteBlog/>
    },
    {
      path: '/upload-a-file',
      chilComponent: () => <UploadFile/>
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
