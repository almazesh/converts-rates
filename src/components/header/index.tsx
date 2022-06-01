import React from "react";
import { ButtonRates } from "../../miniComponents/HeaderButtonRates";


export default function Header(){

  return(
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <h1 className="text-light h4 m-0">Конвертер валют</h1>
          <div className="">
            <ButtonRates 
              src={'https://upload.wikimedia.org/wikipedia/commons/d/de/Flag_of_the_United_States.png'}
              currencyRate={'USD'}
              amount={1}
              currencyAmountRate={0.0338234}
            />

            <ButtonRates 
              src={'https://eeas.europa.eu/sites/default/files/2016/11/23/eu_flag_low.jpg'}
              currencyRate={'EUR'}
              amount={1}
              currencyAmountRate={0.0317571}
            />
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}