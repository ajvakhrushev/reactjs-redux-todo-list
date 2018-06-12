import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { OfferList } from 'components/OfferList/OfferList.jsx';
import listData from 'mocks/list.json';

describe('components/OfferList', () => {
  configure({ adapter: new Adapter() });

  it('renders without crashing', () => {
    shallow(<OfferList list={listData} />);
  });
});

