import React, { useEffect, useState } from 'react'
import { Dropdown } from '../dropdown/Dropdown';
import './Select.css';
import { select } from '../../../common';

const Select = ({id, setFrom, setTo}) => {
    const currency = require('../../../public/data/currency.json');
    const [selectedCurrency, setSelectedCurrency] = useState('UAH');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        id === select.FIRST 
        ? setTo(document.getElementById(select.SECOND).innerText)
        : setTo(document.getElementById(select.FIRST).innerText);

        setFrom(selectedCurrency);
    }, [id, selectedCurrency, setFrom, setTo]);

    return (
        <div className='selectWrapper'>
            <div id={id} className='select'>
                {selectedCurrency}
                <button onClick={() => setIsVisible(true)}>
                    {isVisible 
                        ? <i className="fa-solid fa-chevron-up" inside='input' />
                        : <i className="fa-solid fa-chevron-down" inside='input' />
                    }  
                </button>
            </div>
            {isVisible && <Dropdown options={currency} changeCurrency={setSelectedCurrency} setIsVisible={setIsVisible}/>}
        </div>
    );
}

export { Select };