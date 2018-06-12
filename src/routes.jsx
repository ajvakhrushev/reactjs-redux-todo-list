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
      <Route path="/offer/list" component={OfferListWithRouter} />
      <Route path="/offer/create" component={OfferItemWithRouter} />
      <Route path="/offer/:id" component={OfferItemWithRouter} />
      <Redirect exact from="/" to="/offer/list" />
      <Route path="/*" component={PageNotFoundWithRouter} />
    </Switch>
  </AppWithRouter>
);
