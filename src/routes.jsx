import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import { withRouter } from 'react-router-dom';
import { PageNotFound } from 'components';
import { App, OfferList, OfferItem } from 'containers';
import { URL_PREFIX } from 'constants/index';

const AppWithRouter = withRouter(App);
const OfferListWithRouter = withRouter(OfferList);
const OfferItemWithRouter = withRouter(OfferItem);
const PageNotFoundWithRouter = withRouter(PageNotFound);

export default (
  <AppWithRouter>
    <Switch>
      <Route path={`${URL_PREFIX}/offer/list`} component={OfferListWithRouter} />
      <Route path={`${URL_PREFIX}/offer/create`} component={OfferItemWithRouter} />
      <Route path={`${URL_PREFIX}/offer/:id`} component={OfferItemWithRouter} />
      <Redirect exact from={URL_PREFIX} to={`${URL_PREFIX}/offer/list`} />
      <Route path={`${URL_PREFIX}/*`} component={PageNotFoundWithRouter} />
    </Switch>
  </AppWithRouter>
);
