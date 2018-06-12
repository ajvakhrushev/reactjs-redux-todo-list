import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import * as actions from 'actions';
import { OfferItem as OfferItemComponent } from 'components/OfferItem/OfferItem.jsx';
import 'components/OfferItem/OfferItem.scss';

const mapStateToProps = (state) => {
  const { item, strategy } = state.offer;
  
  return {
    item,
    strategy
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    create: (data = {}) => {
      dispatch({
        type: actions.CREATE_OFFERS_LIST_ITEM,
        payload: data
      });
      dispatch(push('/offer/list'));
    },
    update: (data = {}) => {
      dispatch({
        type: actions.UPDATE_OFFERS_LIST_ITEM,
        payload: data
      });
      dispatch(push('/offer/list'));
    },
    $delete: (id) => {
      dispatch({
        type: actions.DELETE_OFFERS_LIST_ITEM,
        payload: { id }
      });
      dispatch(push('/offer/list'));
    },
    cancel: () => dispatch(push('/offer/list')),
  };
}

export const OfferItem = connect(
  mapStateToProps, 
  mapDispatchToProps
)(OfferItemComponent);
