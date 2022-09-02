import { ChainSymbols } from "../types/ChainSymbols";
declare const useCryptoPriceController: ({ symbol }: {
    symbol: ChainSymbols;
}) => {
    price: string;
};
export { useCryptoPriceController };
