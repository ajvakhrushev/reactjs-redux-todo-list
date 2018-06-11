import React from 'react';
import ReactDOM from 'react-dom';
import OfferList from 'components/OfferList/OfferList.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OfferList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
