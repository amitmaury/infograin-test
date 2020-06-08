import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import  ProductList  from '../components/products/ProductList';
import   NavigationBar  from '../components/ui/NavigationBar';

export const RouterPage = ()=>{
    return (
        <>
        <Router >
        <NavigationBar />
        <Switch>
            <Route path="/" component={ProductList} />
            
          </Switch>
        </Router>
        </>
    )
}