import React from 'react'
import { useState } from 'react'
import styles from "./Counter.module.css"

const Counter = ({props}) => {
    let [value,setValue]=useState(props);
    const handle=(val)=>{setValue(value+val)}
    const handles=()=>setValue(value*2)
  return (
    <div>
        <h1 className={value%2==1?styles.q1:styles.q2}>{value}</h1>
        <button onClick={()=>handle(1)}>+</button>
        <button onClick={()=>handle(-1)}>-</button>
        <button onClick={handles}>Double</button>
    </div>
  )
}

export default Counter