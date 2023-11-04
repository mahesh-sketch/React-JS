import { useState } from 'react'
import './App.css'
import { InputCard } from './Components/Index'
import useCurrencyInfo from './Hooks/useCurrencyinfo'

function App() {
  const [amount, setAmount] = useState("")
  const [from, setFrom] = useState("usd")
  const[to,setTo] = useState("inr")
  const[convertedAmount,setConvertedAmount] = useState(0)


  const currencyInfo = useCurrencyInfo(from)
  const options =  Object.keys(currencyInfo)

  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = ()=>{
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
      <form onSubmit={(e)=>{
      e.preventDefault();
    }}>
    <InputCard label = "From" 
    amount={amount}
    currencyOption={options}
    onCurrencyChange={(cureency)=> setFrom(cureency)}
    selectCurrency= {from}
    onAmountChange={(amount)=> setAmount(amount)}
    />
    <div className="w-full h-0.5 my-[5px]">
  <button type="button" className=" absolute
  left-1/2 -translate-x-1/2 -translate-y-1/2 border-2
   border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
   onClick={swap}
    > SWAP </button>
   </div>
   <InputCard label = "To" 
    amount={convertedAmount}
    currencyOption={options}
    onCurrencyChange={(cureency)=> setTo(cureency)}
    selectCurrency= {to}
    amountDisable
    />
<button type="submit" 
className="mt-[30px] w-full bg-blue-600 text-white px-4 py-3 rounded-lg" onClick={convert}>
Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
    </form>
    </>
  )
}

export default App
