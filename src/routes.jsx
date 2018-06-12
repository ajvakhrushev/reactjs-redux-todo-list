import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import { withRouter } from 'react-router-dom';
import { PageNotFound } from 'components';
import { App, OfferList, OfferItem } from 'containers';

const AppWithRouter = withRouter(App);
const OfferListWithRouter = withRouter(OfferList);
const OfferItemWithRouter = withRouter(OfferItem);
const PageNotFoundWithRouter = withRouter(PageNotFound);

export default (
  <AppWithRouter>
    <Switch>
      <Route path="/reactjs-redux-todo-list/offer/list" component={OfferListWithRouter} />
      <Route path="/reactjs-redux-todo-list/offer/create" component={OfferItemWithRouter} />
      <Route path="/reactjs-redux-todo-list/offer/:id" component={OfferItemWithRouter} />
      <Redirect exact from="/" to="/reactjs-redux-todo-list/offer/list" />
      <Route path="/reactjs-redux-todo-list/*" component={PageNotFoundWithRouter} />
    </Switch>
  </AppWithRouter>
);
