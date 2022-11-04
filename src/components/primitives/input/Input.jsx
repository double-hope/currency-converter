import React, { useEffect, useState } from 'react';
import './Input.css';

const Input = () => {
    const [amount, setAmount] = useState('');

    useEffect(() => {
        console.log(amount);
    }, [amount])

    return (
        <div className='inputWrapper'>
            <input type='text' value={amount} onChange={(e) => setAmount(e.target.value)}/>
        </div>
    )
}

export { Input };