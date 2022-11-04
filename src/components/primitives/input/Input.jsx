import React, { useContext, useState } from 'react';
import './Input.css';
import { InputContext } from '../../../context';

const Input = ({id, setAmount}) => {
    const [selectedAmount, setSelectedAmount] = useState(1);
    const targetInput = useContext(InputContext);

    const changeInput = (e) => {
        setSelectedAmount(e.target.value);
        setAmount(e.target.value);
        targetInput.setTargetInput(e.target);
    }

    return (
        <div className='inputWrapper'>
            <input type='text' value={selectedAmount} onChange={changeInput} id={id}/>
        </div>
    );
}

export { Input };