import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { OfferListItem } from 'components/OfferListItem/OfferListItem.jsx';
import listData from 'mocks/list.json';

describe('components/OfferListItem', () => {
  configure({ adapter: new Adapter() });

  it('renders without crashing', () => {
    shallow(<OfferListItem data={listData[0]} />);
  });
});
