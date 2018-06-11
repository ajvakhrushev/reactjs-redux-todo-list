import { connect } from 'react-redux';
import * as actions from 'actions';
import { OfferList } from 'components';
import 'components/OfferList/OfferList.scss';

const mapStateToProps = (state) => {
  const { list } = state.offer;
  
  return {
    list
  };
}

const mapDispatchToProps = (dispatch) => ({})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(OfferList);
