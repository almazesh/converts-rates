import React from 'react';
import { IFormInput } from '../types';

export default function FormText
  ({ 
    currencies,
    currency,
    amount,
    onAmountStateChanged,
    onCurrencyStateChanged,
  } : IFormInput) {


  return (
    <React.Fragment>
      <select 
        className='form-select p-3 mb-3'
        value={currency}
        onChange={e => onCurrencyStateChanged(e.target.value)}
      >
        {currencies.map((currency,index) => 
          <option 
            key={index} 
            value={currency}
          >
            {currency}
          </option>
        )}
      </select>

      <input 
        onChange={(e: any) => onAmountStateChanged(e.target.value)}
        type='number'
        className="form-control p-3 "
        value={amount}
      />
    </React.Fragment>
  )
}