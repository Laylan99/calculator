import React from 'react';
import {useState} from 'react';
import './App.css';

const App = () => {
  const [value, setValue]= useState("");
  const handleClick = (e) =>{
    setValue(value+""+e.target.value);
  };
  const calculatorExp = /^[+-]?([0-9]*[.])?[0-9]+([+ * \/ -]([0-9]*[.])?[0-9]+)*$/;
  const handleEqual =()=>{
    { calculatorExp.test(value) ?  setValue(eval(value)) : alert("Error \"Wrong Expression\"") }
  };

  const clearFunc =()=>{
    setValue("");
  }

  const handleDel = () => {
    setValue(value.substr(0, value.length - 1));
  }
  return (<>
        <h1><strong>Calculator</strong></h1>
        <div className="calculator">
          <input type="text" name="calculatorScreen" placeholder="0" value={value} id="calculatorScreen"/>
          <button value="9" onClick={handleClick} className="button">9</button>
          <button value="8" onClick={handleClick} className="button">8</button>
          <button value="7" onClick={handleClick} className="button">7</button>
          <button value="6" onClick={handleClick} className="button">6</button>
          <button value="5" onClick={handleClick} className="button">5</button>
          <button value="4" onClick={handleClick} className="button">4</button>
          <button value="3" onClick={handleClick} className="button">3</button>
          <button value="2" onClick={handleClick} className="button">2</button>
          <button value="1" onClick={handleClick} className="button">1</button>
          <button value="0" onClick={handleClick} className="button">0</button>


          <button value="." onClick={handleClick} className="button">.</button>
          <button value="-" onClick={handleClick} className="button">-</button>
          <button value="+" onClick={handleClick} className="button">+</button>
          <button value="*" onClick={handleClick} className="button">*</button>
          <button value="/" onClick={handleClick} className="button">/</button>
          <button value="del" onClick={handleDel} className="button">del</button>
          <button value="=" onClick={handleEqual} className="buttonL">=</button>
          <button value="clear" onClick={clearFunc} className="buttonL">clear</button>
        </div>

    </>
  );
}

export default App;
