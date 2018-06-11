import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import OfferListItem from 'components/OfferItem/OfferListItem.jsx'
import 'components/OfferList/OfferList.scss';

export default class extends Component {

  static propTypes = {
    list: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { list } = this.props;

    return (
      <div className="offer-list__container">
        <div className="offer-list">
          <div className="offer-list__actions">
            <h1 className="offer-list__title">
              Offers List
            </h1>
          </div>
          <div className="offer-list__items">
            {
              list.map((next) => <OfferListItem key={next.id} data={next} />)
            }
          </div>
        </div>
      </div>
    );
  }

}
