import React, { Dispatch, SetStateAction } from 'react';


export type TypeSetState<T> = Dispatch<SetStateAction<T>>

export interface IFormInput {
  currencies: Array<any>
  amount:number
  currency:string
  onAmountStateChanged:TypeSetState<number>
  onCurrencyStateChanged:TypeSetState<string>
}

export interface IButtonRates {
  src:string,
  currencyRate:string,
  amount:number,
  currencyAmountRate:number
}
