import { formatRates } from '../utils';
import { IButtonRates } from '../types';

export const ButtonRates = (
  {
    src, 
    currencyRate,
    amount, 
    currencyAmountRate
  }: IButtonRates ) => {

  return (
    <button className="btn btn-light me-5">
      <div className="d-flex">
        <div className="d-flex align-items-center me-1">
          <img 
            className="me-1"
            width="30px" 
            src={src}
            alt=""
          />
          {currencyRate}  
        </div> 
        / 
        <div className="d-flex align-items-center ms-1">
          UAH 
          <img 
            className="ms-1"
            width="30px" 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Flag_of_Ukraine.png/800px-Flag_of_Ukraine.png" 
            alt="" 
          />
        </div>
      </div>
      <span className='text-success'>{formatRates(amount / currencyAmountRate)} UAH</span>
    </button>
  )
}