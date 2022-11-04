import React from 'react';
import { Input, Select } from '../';

const Converter = ({from, to, amount}) => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "PcUraOhScr3YBGS5lPupg02a2AtIVyLP");
  
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };
  
    fetch(`https://api.apilayer.com/currency_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(JSON.parse(result).info.quote))
      .catch(error => console.log('error', error));
      
  return (
    <div>
      <Input />
      <Select></Select>
    </div>
  )
}

export { Converter };