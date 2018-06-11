import React from 'react';
import ReactDOM from 'react-dom';
import PageNotFound from 'components/PageNotFound/PageNotFound.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PageNotFound />, div);
  ReactDOM.unmountComponentAtNode(div);
});
