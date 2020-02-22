import React from 'react';

const defaultRate = {
  rateName: null,
  price: null,
  description: null,
};

class Rate {
  constructor() {
    this._rate = defaultRate;
  }

  setRate(rate) {
    this._rate = rate;
  }

  reset() {
    this._rate = defaultRate;
  }

  getRate() {
    return this._rate;
  }
}

export const RateContext = React.createContext({rate: new Rate()});