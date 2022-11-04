import React, { useContext, useState } from 'react';
import { InputContext } from '../../../context';
import './Input.css';

const Input = ({id, setAmount}) => {
    const [selectedAmount, setSelectedAmount] = useState();
    const targetInput = useContext(InputContext);

    const changeInput = (e) => {
        setSelectedAmount(e.target.value);
        setAmount(e.target.value);
        targetInput.setTargetInput(e.target);
    }

    return (
        <div className='inputWrapper'>
            <input type='text' value={selectedAmount} placeholder='1' onChange={changeInput} id={id}/>
        </div>
    );
}

export { Input };