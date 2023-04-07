import React from 'react'
import { useState } from 'react';
import './CounterComponent.css'


const CounterComponent =() => {
    const [counterVariable,setCounter]=useState(0);

    const incrementFunction =()=>{
        // counterVariable +=1;
        // console.log(counterVariable);
        setCounter(counterVariable+1);
    }
    const decrementFunction =()=>{
        // counterVariable -=1;
        // console.log(counterVariable);
        setCounter(counterVariable-1);
    }
  return (
    <React.Fragment>
    <div>
    <h1>Counter App</h1>
    <div class="counter">
    <div>{counterVariable}</div>
    <button onClick ={incrementFunction} class="increment"> + </button>
    <button onClick ={decrementFunction} class="decrement"> - </button>
    </div>
    </div>
    </React.Fragment>
  );
}

export default CounterComponent