![Licence](https://img.shields.io/badge/license-MIT-blue.svg) [![npm version](https://img.shields.io/npm/v/react-crypto-price.svg?style=flat)](https://www.npmjs.com/package/react-crypto-price)
[![Downloads](https://img.shields.io/npm/dt/react-crypto-price.svg)](https://www.npmjs.com/package/react-crypto-price)

## React Crypto Price

React hook that fetch the price of crypto in USDT from Binance API.

## Installation

`npm i react-crypto-price`

## Live Demo

https://codesandbox.io/s/react-crypto-price-example-7unmvs

## Example

```javascript
import { useCryptoPriceController, ChainSymbols } from "react-crypto-price";

export default function App() {
  const { price } = useCryptoPriceController({ symbol: ChainSymbols.NEAR });
  return (
    <div className="App">
      <h1>react-crypto-price example</h1>
      <h3>current NEAR price in USDT</h3>
      <p>{price}$</p>
    </div>
  );
}
```

## API

| Property | Type         | Description                |
| :------- | :----------- | :------------------------- |
| symbol   | ChainSymbols | Crypto to fetch the price. |
