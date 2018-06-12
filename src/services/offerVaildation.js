import { REGEXP } from 'constants/index';
const get = require('lodash.get');

export const isDataValid = (data) => {
  const productImageUrl = get(data, 'productImagePointer.itemName');

  if (!data.name
      || (!productImageUrl || !REGEXP.url.test(productImageUrl))
      || !data.productName
      || (!!data.retailerUrl && !REGEXP.url.test(data.retailerUrl))
     ) {
    return false;
  }

  return true;
}

export const getInvalidData = (data) => {
  const result = {
    productImagePointer: {}
  };

  if (!data.name) {
    result.name = 'This field is required';
  }

  const productImageUrl = get(data, 'productImagePointer.itemName');

  if (!productImageUrl) {
    result.productImagePointer = {
      itemName: 'This field is required'
    };
  } else if (!REGEXP.url.test(productImageUrl)) {
    result.productImagePointer = {
      itemName: 'Should be URL like'
    };
  }

  if (!data.productName) {
    result.productName = 'This field is required';
  }

  if (!!data.retailerUrl && !REGEXP.url.test(data.retailerUrl)) {
    result.retailerUrl = 'Should be URL like';
  }

  return result;
};
