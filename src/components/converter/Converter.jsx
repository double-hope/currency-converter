import React, { useContext, useEffect, useState } from 'react';
import { Input, Select } from '../';
import { input, select, API_KEY } from '../../common';
import { InputContext } from '../../context';
import './Converter.css';

const Converter = () => {
    const [from, setFrom] = useState('UAH');
    const [to, setTo] = useState('UAH');
    const [amount, setAmount] = useState(1);
    const targetInput = useContext(InputContext);

    const myHeaders = new Headers();
    myHeaders.append('apikey', API_KEY);
  
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };
    
    useEffect(() => {
      fetch(`https://api.apilayer.com/currency_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
        .then(res => res.text())
        .then(result => {
          const id = targetInput.input['id'];
          if(id != null && id === input.FIRST){
            document.getElementById(input.SECOND).value = JSON.parse(result).result;
          } else {
            document.getElementById(input.FIRST).value =  JSON.parse(result).result;
          }
        })
        .catch(error => console.log('error', error));
   // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [amount, from, to, targetInput.input])

    return (
      <div className='conveterWrapper'>
        <Input id={input.FIRST} setAmount={setAmount}/>
        <Select id={select.FIRST} setFrom={setFrom} setTo={setTo}/>
        <i className='fa-solid fa-arrow-right-arrow-left' />
        <Input id={input.SECOND} setAmount={setAmount}/>
        <Select id={select.SECOND} setFrom={setFrom} setTo={setTo}/>
      </div>
    );
}

export { Converter };