import React,{useEffect, useState} from 'react'


 const App = () => {
   const[count,setCount]=useState(1)
   const handleDecrement=()=>{
     setCount(count-1)
   }
   const handleIncrement=()=>{
     setCount(count+1)
   }

   const newCall=()=>{
setCount(50)
   }
   useEffect(()=>{
     console.log('just for testing')

   },[count])
  return (
    <React.Fragment>
      <h1>Count Down:{count}</h1>
      <button type='button' onClick={handleDecrement}>Decrement</button>
      <button type="button" onClick={handleIncrement}>Increment</button>
      <button onClick={newCall}>click me</button>
    </React.Fragment>
  )
}
export default App

