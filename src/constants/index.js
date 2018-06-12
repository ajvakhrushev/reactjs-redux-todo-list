export const DEFAULT_ITEM = {
  name: '',
  category: '',
  description: '',
  productName: '',
  productBrand: '',
  retailerUrl: '',
  reducedPrice: {
    amount: 0,
    currencyCode: ''
  },
  originalPrice: {
    amount: 0,
    currencyCode: ''
  },
  productImagePointer: {
    itemName: ''
  },
  createdAt: null
};

export const REGEXP = {
  url: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/i
};
