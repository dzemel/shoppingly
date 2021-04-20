import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import ProductsList from "./ProductsList";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <ProductsList />
        </Route>
        <Route exact path="/products/:id">
          <ProductDetails />
        </Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
