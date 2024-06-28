
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const[principle,setPrinciple]=useState(0)
  const[rate,setRate]=useState(0)
  const[year,setYear]=useState(0)
  const[interest,setInterest]=useState(0)

  const [isprinciple, setIsPrinciple] = useState(true)
  const [israte, setIsRate] = useState(true)
  const [isyear, setIsYear] = useState(true)

  const validate=(e)=>{
    const name=e.target.name
    const value=e.target.value
    console.log(name,value);
    if(!!value.match(/^[0-9]*$/)){
        if(name=='principle'){
          setPrinciple(value)
          setIsPrinciple(true)
        }else if(name=='rate'){
          setRate(value)
          setIsRate(true)
        }else{
          setYear(value)
          setIsYear(true)
        }
    }else{
      if(name=='principle'){
        setIsPrinciple(false)
        setPrinciple(value)
      }else if(name=='rate'){
        setIsRate(false)
        setRate(value)
      }else{
        setIsYear(false)
        setYear(value)
      }
    }
  }
  const handleReset=()=>{
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
    setPrinciple(0)
    setRate(0)
    setYear(0)


  }
  const handleCalculate=(e)=>{
    e.preventDefault()
   if(principle==""||rate==""||year==""){
    alert('please fill the form')
   }else{
    setInterest((principle*rate*year)/100)
   }
  }
  

  return (
    <>
    <div style={{backgroundColor:'black',height:'100vh'}} className='d-flex justify-content-center align-items-center'>
      <div style={{background:'white',width:'500px'}} className='p-5 rounded'>
        <h1>Simple Interest App</h1>
        <p>Calculate your simple interest easily</p>
        <div style={{backgroundColor:'orange',height:'150px'}} className='p-3 mt-5 rounded shadow d-flex justify-content-center align-items-center flex-column'>
          <h1 className='fw-bold'>₹ {interest}</h1>
          <p>Total Simple Interest</p>
          </div>
          <form className='mt-4' onSubmit={handleCalculate}>
            <div className="mb-3"><TextField className='w-100' id="outlined-basic" value={principle || ''} onChange={(e)=>validate(e)} name='principle' label="₹ Principle Amount" variant="outlined" /></div>
           {!isprinciple && <p className='text-danger'>*invalid input</p>}
            <div className="mb-3"><TextField className='w-100' id="outlined-basic" value={rate ||''}  onChange={(e)=>validate(e)} name='rate' label="Rate of interest (p.a)%" variant="outlined" /></div>
           {!israte && <p className='text-danger'>*invalid input</p>}
            <div className="mb-3"><TextField className='w-100' id="outlined-basic" value={year ||''}  onChange={(e)=>validate(e)} name='year' label="Year (Yr)" variant="outlined" /></div>
           {!isyear && <p className='text-danger'>*invalid input</p>}
            <div className="mb-3 d-flex justify-content-between">
            <Button variant="contained" color='success' style={{width:'190px', padding:'15px'}} type='submit' disabled={isprinciple&& israte&& isyear?false:true}>Calculate</Button>
            <Button variant="outlined" color='primary' style={{width:'190px', padding:'15px'}} onClick={handleReset}>Reset</Button>
            </div>
          </form>
       

      </div>

    </div>
      
    </>
  )
}

export default App
