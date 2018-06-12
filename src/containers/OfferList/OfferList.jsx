import { connect } from 'react-redux';
import { OfferList as OfferListComponent } from 'components';
import 'components/OfferList/OfferList.scss';

const mapStateToProps = (state) => {
  const { list } = state.offer;
  
  return {
    list
  };
}

const mapDispatchToProps = (dispatch) => ({})

export const OfferList = connect(
  mapStateToProps, 
  mapDispatchToProps
)(OfferListComponent);
