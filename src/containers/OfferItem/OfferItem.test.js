import React from 'react';
import { configure, shallow } from 'enzyme';
import { createBrowserHistory } from 'history';
import configureStore from 'store/configureStore';
import Adapter from 'enzyme-adapter-react-16';
import { OfferItem } from 'containers/OfferItem/OfferItem.jsx';
import listData from 'mocks/list.json';

describe('containers/OfferItem', () => {
  configure({ adapter: new Adapter() });

  const initialState = {
    offer: {
      list: listData,
      item: listData[0]
    }
  };
  const history = createBrowserHistory();
  const store = configureStore(initialState, history);

  it('renders without crashing', () => {
    shallow(<OfferItem store={store}/>);
  });
});
