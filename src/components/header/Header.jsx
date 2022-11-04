/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
  const [usd, setUSD] = useState();
  const [eur, setEUR] = useState();
  const myHeaders = new Headers();
  myHeaders.append('apikey', '3s3gfHwe9FXDDSxa6Kjx4ZuJpft6LqK5');

  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };
  
  useEffect(() => {
    fetch(`https://api.apilayer.com/currency_data/convert?to=UAH&from=USD&amount=1`, requestOptions)
      .then(res => res.text())
      .then(result => {
        setUSD(JSON.parse(result).info.quote);
      })
      .catch(error => console.log('error', error));
  }, [])

  useEffect(() => {
    fetch(`https://api.apilayer.com/currency_data/convert?to=UAH&from=EUR&amount=1`, requestOptions)
      .then(res => res.text())
      .then(result => {
        setEUR(JSON.parse(result).info.quote);
      })
      .catch(error => console.log('error', error));
  }, [])

  return (
    <header>
        <p>
          Currency converter
        </p>
        <div className='currentCurrencies'>
          <span>USD: {usd}</span>
          <span>EUR: {eur}</span>
        </div>
        
    </header>
  );
}

export { Header };