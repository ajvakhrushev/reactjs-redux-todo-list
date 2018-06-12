import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { OfferListItem } from 'components/OfferListItem/OfferListItem.jsx';
import 'components/OfferList/OfferList.scss';

export class OfferList extends Component {

  static propTypes = {
    list: PropTypes.array.isRequired
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
            {list.map((next) => <OfferListItem key={next.id} data={next} />)}
          </div>
        </div>
      </div>
    );
  }

}
