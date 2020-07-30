import React, { useState } from 'react';
import './Calculator.css';
const Calculator=()=>{

    const [input, setInput] = useState('');
    const buttons = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "%"];

    return(

        
        <div className="container">
            <div className="row1">
                    {input}
            </div>

            <div className="row2">

                <div className="col1">
                    <div className="row3">
                        <button  className="clearAc-button" onClick={()=>{setInput(input.substr(0,input.length - 1))}}>Clear</button>
                        <button className="clearAc-button" onClick={()=>setInput("")} value="">AC</button>
                    </div>
                    <div className="row4">
                        {
                    buttons.map((b,index)=><button className="button-wrapper" key={index} value={b} onClick={(event)=>setInput(input + event.target.value)}>{b}</button>)
                        }
                    </div>
                </div>

                <div className="col2">
                    <button className="operator" onClick={event=>setInput(input + event.target.value)} value="+">+</button>
                    <button className="operator" onClick={event=>setInput(input + event.target.value)} value="-">-</button>
                    <button  className="operator" onClick={event=>setInput(input + event.target.value)} value="*">*</button>
                    <button  className="operator"onClick={event=>setInput(input + event.target.value)} value="/">/</button>
                    <button  className="operator" onClick={event=>{
                        try{
                            setInput(
                                String(eval(input)).length > 3 && String(eval(input)).includes('.') ? String(eval(input).toFixed(4)) : String(eval(input))
                            );
                        }
                        catch(event){
                            console.log(event);
                        }
                    }}
                        value="=">=</button>
                </div>

            </div>

        </div>
    );
}
export default Calculator;