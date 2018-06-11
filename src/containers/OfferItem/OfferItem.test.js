import React from 'react';
import ReactDOM from 'react-dom';
import OfferItem from 'components/OfferItem/OfferItem.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OfferItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
