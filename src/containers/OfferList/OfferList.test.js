import React from 'react';
import { configure, shallow } from 'enzyme';
import { createBrowserHistory } from 'history';
import configureStore from 'store/configureStore';
import Adapter from 'enzyme-adapter-react-16';
import { OfferList } from 'containers/OfferList/OfferList.jsx';
import listData from 'mocks/list.json';

describe('components/OfferList', () => {
  configure({ adapter: new Adapter() });

  const initialState = {
    offer: {
      list: listData,
      item: {}
    }
  };
  const history = createBrowserHistory();
  const store = configureStore(initialState, history);

  it('renders without crashing', () => {
    shallow(<OfferList store={store}/>);
  });
});
