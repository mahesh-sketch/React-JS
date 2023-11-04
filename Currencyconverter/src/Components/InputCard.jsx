import React, { useId } from 'react'

function InputCard({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,

  className = ""
}) {

  const amountInputId = useId()
  return (
    <div className={`bg-white sm:bg-yellow-200 md:bg-green-200 p-3 rounded-lg
     text-sm flex h-[150px] ${className}`}>
    <div className="w-1/2">
        <label htmlFor= {amountInputId} className="text-black/40 mr-[220px] sm:mr-[400px] md:mr-[600px]">
            {label}
        </label>
        <input id= {amountInputId}
            className="outline-none w-full bg-transparent py-1.5 mt-2"
            type="number"
            placeholder="Amount"
            disabled = {amountDisable}
            value={amount}
            onChange={(e)=>{
              onAmountChange && onAmountChange(Number(e.target.value))
            }}
        />
    </div>
    <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
            className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer 
            outline-none h-7 w-1/2 md:w-1/3"
            onChange={(e)=>{
              onCurrencyChange && onCurrencyChange(e.target.value)
            }}
            value={selectCurrency}
            disabled = {currencyDisable}
        >
            {currencyOption.map((currency) => (<option key={currency} value={currency}>
                   {currency}
                </option>))}

                {/* <option value="usd">
                    usd
                </option> */}
        
        </select>
    </div>
</div>

  )
}

export default InputCard
