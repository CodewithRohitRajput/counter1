import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
    const [count , setCount] = useState(0);
  return (
    <div className="counter">
      <p className='heading' > Counter </p>

        <div className='countdiv'>
       <p>{count}</p> 
        </div>
        <div className='btndiv'>
       <button className='btn' onClick={()=>setCount(count+1)} >Click Me</button>
       </div>
    </div>
  )
}

export default Counter
