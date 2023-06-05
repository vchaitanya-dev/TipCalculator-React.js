import { useState,useEffect } from 'react';
import logo from './assets/logo.svg';
import dollarIcon from './assets/dollarIcon.svg'
import personIcon from './assets/personIcon.svg'
function App() {
 
  const [amt,setAmt] = useState(0)
  const [tipPercent,setTipPercent] = useState(0)
  const [count,setCount] = useState(0)
  const [reset,setReset] = useState(false)
  const [person, setPerson] = useState(0)  
  const [total,setTotal] = useState(0)
  useEffect(() =>  {
    const calculate = () => {
      let tip = amt * (tipPercent / 100)
      setPerson(tip / count)
      let amount = parseInt(amt) + parseInt(tip);
      setTotal(amount)
    }
    calculate();
  },[amt,tipPercent,count])
  if(isNaN(person) === true){
    setPerson(0)
 }
 if (person === Infinity){
   setPerson(0)
 } 
  const onAmount = (e) => {
    e.preventDefault();
  setAmt(e.target.value)
  }
  const ontip = (e) => {
    e.preventDefault();
   setTipPercent(e.target.value)    
  }
  const onPerson = (e) => {
    e.preventDefault();
    setCount(e.target.value);
  }
  const onReset = () =>{
    setReset(true);
    if(reset === true){
      setAmt(0)
      setTipPercent(0)
      setCount(0)
    }
  }
 return (
<>
<img src={logo} alt="" className='image' />
<div className='main_container'>
<div className='main'>
<div className='bill_input'>
  <p className='heading'>Bill</p>
  <div className='input_number'>
  <img src={dollarIcon} alt="" className='dollar_image'/>
  <input type='number' value={amt}
   placeholder='0' className='input_bill' onChange={onAmount}/>
  </div>
    <p className='heading'>Select Tip %</p>
  <div className='button_group'>
  <button className='five_button' onClick={() => setTipPercent(5)} >5%</button>
  <button className='ten_button' onClick={() => setTipPercent(10)}>10%</button>
  <button className='fifteen_button' onClick={() => setTipPercent(15)}>15%</button>
  <button className='twenty_button' onClick={() => setTipPercent(20)}>20%</button>
  <button className='fifty_button' onClick={() => setTipPercent(50)} >50%</button>
  <input type='number' alt='' placeholder='Custom' onChange={ontip} className='custom_input'/>
  </div>
<div className='error'>
<p className='heading'>Number of People</p>
<p className='errormessage'  hidden={count === 0 ? false : true} >Can't be Zero</p>
</div>
  <div className="input_person">
  <img src={personIcon} alt="" className='person_image'/>
  <input type='number' placeholder='0'  className={ count === 0 ? 'person_alert' : 'person_input'} onChange={onPerson}/>
  </div>
  </div>
</div>
<div className='result_container'>
<div className='tip_section'>
  <p className='tip_heading'><strong>Tip Amount</strong> <br/>
  / person</p>
  <h1 className='tip_amt'>$ {person === 0 ? '0.00' : person}</h1>
</div>
<div className='total_section'>
  <p className='total_heading'><strong>Total</strong> <br/>
  / person</p>
  <h1 className='total_amt'>$ {total === 0 ? '0.00' : total}</h1>
</div>
<button className='reset_button' onClick={onReset}>RESET</button>
</div>
</div>
</>
  );
}

export default App;

