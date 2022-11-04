import React, { useEffect, useState } from 'react'
import { Dropdown } from '../dropdown/Dropdown';
import './Select.css';

const Select = ({setCurrency}) => {
    const currency = require('../../../public/data/currency.json');
    const [selectedCurrency, setSelectedCurrency] = useState('UAH');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setCurrency(selectedCurrency);
    }, [selectedCurrency, setCurrency]);

    return (
        <>
            <div className='select'>{selectedCurrency}
                <button onClick={() => setIsVisible(true)}>
                    {isVisible 
                        ? <i className="fa-solid fa-chevron-up" />
                        : <i className="fa-solid fa-chevron-down" />
                    }  
                </button>
            </div>
            {isVisible && <Dropdown options={currency} changeCurrency={setSelectedCurrency} />}
        </>
    )
}

export { Select };