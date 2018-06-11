import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import { withRouter } from 'react-router-dom';
import { App, Home, OfferList, OfferItem, PageNotFound } from 'components';

const AppWithRouter = withRouter(App);
const HomeWithRouter = withRouter(Home);
const OfferListWithRouter = withRouter(OfferList);
const OfferItemWithRouter = withRouter(OfferItem);
const PageNotFoundWithRouter = withRouter(PageNotFound);

export default (
  <AppWithRouter>
    <Switch>
      <Route path="/home" component={HomeWithRouter} />
      <Route path="/offer/list" component={OfferListWithRouter} />
      <Route path="/offer/create" component={OfferItemWithRouter} />
      <Route path="/offer/:id" component={OfferItemWithRouter} />
      <Redirect from="/" to="/home" />
      <Route path="*" component={PageNotFoundWithRouter} />
    </Switch>
  </AppWithRouter>
);
