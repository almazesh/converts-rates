import React from "react";
import  FormText  from "../../miniComponents/FormText";
import { getRates } from '../../API/index';
import { Card } from '../../miniComponents/card/Card';
import { CardHead } from '../../miniComponents/card/CardHead';
import { ResponsiveSection } from '../../miniComponents/card/ResponsiveSection';
import Header from "../header";
import { formatRates } from '../../utils';


export default function Converter(){
  const [amountFirst , setAmountFirst] = React.useState<number>(1)
  const [amountSecond , setAmountSecond] = React.useState<number>(1)
  const [currencyFirst , setCurrencyFirst] = React.useState<any>('USD')
  const [currencySecond , setCurrencySecond] = React.useState<any>('EUR')
  const [endPoint] = React.useState<string>('latest')
  const [rates,setRates] = React.useState([])
  const [error, setError] = React.useState<string>('')


  React.useEffect(() => {
    getRates(endPoint)
      .then(res => {
        res.status === 429 
        ? res.json().then(res => setError(res.message))
        : res.json().then(res => setRates(res.rates))
      })
  }, [])

  React.useEffect(() => !!rates && handleAmountFirstStateChange(1) , [rates])

  function handleAmountFirstStateChange(amountFirstState:any){
    setAmountSecond(formatRates(amountFirstState * rates[currencySecond] / rates[currencyFirst] ))
    setAmountFirst(amountFirstState)
  }

  function handleCurrencyFirstStateChange(currencyFirstState:any){
    setAmountSecond(formatRates(amountFirst * rates[currencySecond] / rates[currencyFirstState]))
    setCurrencyFirst(currencyFirstState)
  }

  function handleAmountSecondStateChange(amountSecondState:any){
    setAmountFirst(formatRates(amountSecondState * rates[currencyFirst] / rates[currencySecond]) )
    setAmountSecond(amountSecondState)
  }

  function handleCurrencySecondStateChange(currencySecondState:any){
    setAmountFirst(formatRates(amountSecond * rates[currencyFirst] / rates[currencySecondState]) )
    setCurrencySecond(currencySecondState)
  }
  
  return(
    <React.Fragment>
      <Header />

      <section 
        className="container mt-5 d-flex justify-content-center align-items-center"
        style={{height:"80vh"}}
      >
        {error && (
          <section>
            <h1 className="text-muted display-1">ERROR!</h1>
            <h4>{error}</h4>
          </section>
        )}

        <ResponsiveSection>
          {
            rates.length !== 0 && (
              <Card>
                <CardHead>
                  <div className="me-3">
                    <FormText 
                      onAmountStateChanged={handleAmountFirstStateChange}
                      onCurrencyStateChanged={handleCurrencyFirstStateChange}
                      currencies={Object.keys(rates)}
                      amount={amountFirst}
                      currency={currencyFirst}
                    />  
                  </div>
                  <div>
                    <FormText 
                      onAmountStateChanged={handleAmountSecondStateChange}
                      onCurrencyStateChanged={handleCurrencySecondStateChange}
                      currencies={Object.keys(rates)}
                      amount={amountSecond} 
                      currency={currencySecond}
                    />  
                  </div>
                </CardHead>
              </Card>
            )
          }
        </ResponsiveSection>
      </section>
    </React.Fragment>
  )
}