import { REGEXP } from 'constants';
const get = require('lodash.get');

export const isDataValid = (data) => {
  const productImageUrl = get(data, 'productImagePointer.itemName');

  if (!data.name
      || (!productImageUrl || !REGEXP.test(productImageUrl))
      || !data.productName
      || (!!data.productName && !REGEXP.test(data.productName))
     ) {
    return false;
  }

  return true;
}

export const getInvalidData = (data) => {
  const result = {
    productImageUrl: {}
  };

  if (!data.name) {
    result.name = 'This field is required';
  }

  const productImageUrl = get(data, 'productImagePointer.itemName');

  if (!productImageUrl) {
    result.productImagePointer = {
      itemName: 'This field is required'
    };
  } else if (!REGEXP.test(productImageUrl)) {
    result.productImagePointer = {
      itemName: 'Should be URL like';
    };
  }

  if (!data.productName) {
    result.productName = 'This field is required';
  }

  if (!!data.productName && !REGEXP.test(data.productName)) {
    result.retailerUrl = 'Should be URL like';
  }

  return result;
};
