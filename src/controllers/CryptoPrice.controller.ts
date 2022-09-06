import { useEffect, useState } from "react";
import { ChainSymbols } from "../types/ChainSymbols";

const useCryptoPriceController = ({ symbol }: { symbol: ChainSymbols }) => {
  const [price, setPrice] = useState<string>("");

  const getCryptoPrice = async () => {
    try {
      const priceData = await fetch(
        `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}USDT`
      );
      const final = await priceData.json();

      setPrice(final.price);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCryptoPrice();
  }, [symbol]);

  return {
    price,
  };
};

export { useCryptoPriceController };
