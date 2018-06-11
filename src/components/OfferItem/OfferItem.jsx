import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { DEFAULT_ITEM, REGEXP } from 'constants';
import { isDataValid, getInvalidData } from 'constants';
import categories from 'mocks/categories.json';
import currencies from 'mocks/currencies.json';
import brands from 'mocks/brands.json';
import 'components/OfferItem/OfferItem.scss';
const cloneDeep = require('lodash.clonedeep');
const set = require('lodash.set');

export default class extends Component {

  static propTypes = {
    item: PropTypes.object.isRequired,
    strategy: PropTypes.string
  }

  state = {
    item: cloneDeep(DEFAULT_ITEM),
    isValid: false,
    title: 'Create offer'
  }

  constructor(props) {
    super(props);

    this.state = {
      item: Object.assign(cloneDeep(DEFAULT_ITEM), props.item),
      isValid: false,
      title: props.strategy === 'create' ? 'Create offer' : 'Update offer'
    };

    this.onCancel = this.onCancel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(props) {
    if(this.props.item === props.item) {
      return;
    }

    this.setState({
      item: Object.assign(cloneDeep(DEFAULT_ITEM), props.item),
      isValid: this.isValid(props.item)
    });
  }

  isValid(data = {}) {
    return isDataValid(data);
  }

  handleChange(name) {
    return (event) => {
      const { item } = this.state;

      set(item, name, event.target.value);

      this.setState({
        item,
        isValid: this.isValid(item)
      });
    }
  }

  onCancel(event) {
    const { cancel } = this.props;

    event.preventDefault();

    cancel();
  }

  onRemove(event) {
    const { $delete, item: { id } } = this.props;

    event.preventDefault();

    $delete({ id });
  }

  onSubmit(event) {
    const { item, strategy, create, update } = this.props;
    const { isValid, item } = this.state;

    event.preventDefault();

    if(!isValid) {
      return;
    }

    switch(strategy) {
      case 'create': create(item);
        break;
      case 'update': update(item);
        break;
    }
  }

  render() {
    const { id, strategy } = this.props;
    const { isValid, item, title } = this.state;

    const invalid = getInvalidData(item);

    return (
      <div className="offer-list__container">
        <form
          key={id}
          className="offer-form"
          onSubmit={::this.onSubmit}>
          <h1 className="offer-form__title">
            {title}
          </h1>
          <div className="offer-form__fields">
            <TextField
              key={`${id}-name`}
              label="Name"
              value={item.name}
              error={!!invalid.name}
              helperText={invalid.name}
              onChange={::this.handleChange('name')}
              required
            />
            <TextField
              key={`${id}-productImagePointer.itemName`}
              label="Product image pointer url"
              value={item.productImagePointer.itemName}
              error={!!invalid.productImagePointer.itemName}
              helperText={invalid.productImagePointer.itemName}
              onChange={::this.handleChange('productImagePointer.itemName')}
              pattern={REGEXP.url}
              required
            />
            <TextField
              key={`${id}-category`}
              select
              label="Category"
              value={item.name}
              error={!!invalid.category}
              helperText={invalid.category}
              onChange={::this.handleChange('category')}
            >
              {categories.map(next => (
                <MenuItem key={next.key} value={next.value}>
                  {next.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              key={`${id}-productName`}
              label="Product name"
              value={item.productName}
              error={!!invalid.productName}
              helperText={invalid.productName}
              onChange={::this.handleChange('productName')}
              required
            />
            <TextField
              key={`${id}-productBrand`}
              select
              label="Product brand"
              value={item.productBrand}
              error={!!invalid.productBrandy}
              helperText={invalid.productBrand}
              onChange={::this.handleChange('productBrand')}
            >
              {brands.map(next => (
                <MenuItem key={next.key} value={next.value}>
                  {next.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              key={`${id}-retailerUrl`}
              label="Retailer url"
              value={item.retailerUrl}
              error={!!invalid.retailerUrl}
              helperText={invalid.retailerUrl}
              onChange={::this.handleChange('retailerUrl')}
              pattern={REGEXP.url}
            />
            <div className="field-price">
              <TextField
                key={`${id}-originalPrice.amount`}
                number
                label="Original price amount"
                value={item.originalPrice.amount}
                error={!!invalid.originalPrice && !!invalid.originalPrice.amount}
                helperText={!!invalid.originalPrice && invalid.originalPrice.amount}
                onChange={::this.handleChange('originalPrice.amount')}
              />
              <TextField
                key={`${id}-originalPrice.currencyCode`}
                select
                label="Original price currency"
                value={item.originalPrice.currencyCode}
                error={!!invalid.originalPrice && !!invalid.originalPrice.currencyCode}
                helperText={!!invalid.originalPrice && invalid.originalPrice.currencyCode}
                onChange={::this.handleChange('originalPrice.currencyCode')}
              >
                {currencies.map(next => (
                  <MenuItem key={next.key} value={next.value}>
                    {next.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className="field-price">
              <TextField
                key={`${id}-originalPrice.amount`}
                number
                label="Original price amount"
                value={item.originalPrice.amount}
                error={!!invalid.originalPrice && !!invalid.originalPrice.amount}
                helperText={!!invalid.originalPrice && invalid.originalPrice.amount}
                onChange={::this.handleChange('originalPrice.amount')}
              />
              <TextField
                key={`${id}-reducedPrice.currencyCode`}
                select
                label="Reduced price currency"
                value={item.reducedPrice.currencyCode}
                error={!!invalid.reducedPrice && !!invalid.reducedPrice.currencyCode}
                helperText={!!invalid.reducedPrice && invalid.reducedPrice.currencyCode}
                onChange={::this.handleChange('reducedPrice.currencyCode')}
              >
                {currencies.map(next => (
                  <MenuItem key={next.key} value={next.value}>
                    {next.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <TextField
              key={`${id}-description`}
              label="Description"
              value={item.description}
              error={!!invalid.description}
              helperText={invalid.description}
              onChange={::this.handleChange('description')}
            />
          </div>
          <div className="offer-form__actions">
            <button
              className="offer-form__actions__button cancel"
              onClick={::this.onCancel}
            >Cancel</button>
            <input
              className="offer-form__actions__button"
              type="submit"
              value="Submit"
              disabled={!isValid}
            />
            {
              strategy === 'update' ?
              <button
                className="offer-form__actions__button remove"
                onClick={::this.onRemove}
              >Remove</button>
              :
              ''
            }
          </div>
        </form>
      </div>
    );
  }

}
