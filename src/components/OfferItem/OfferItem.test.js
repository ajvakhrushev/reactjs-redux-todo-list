import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { OfferItem } from 'components/OfferItem/OfferItem.jsx';
import listData from 'mocks/list.json';

describe('containers/OfferItem', () => {
  configure({ adapter: new Adapter() });

  it('renders without crashing', () => {
    shallow(<OfferItem item={listData[0]} strategy="update" />);
  });
});

