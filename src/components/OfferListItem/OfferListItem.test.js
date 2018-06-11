import React from 'react';
import ReactDOM from 'react-dom';
import OfferListItem from 'components/OfferListItem/OfferListItem.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OfferListItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
