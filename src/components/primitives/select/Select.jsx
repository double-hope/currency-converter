import React, { useState } from 'react'
import { Dropdown } from '../dropdown/Dropdown';
import './Select.css';

const Select = () => {
    const currency = require('../../../public/data/currency.json');
    const [selectedCurrency, setSelectedCurrency] = useState('UAH');
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div>
            <div className='select'>{selectedCurrency}
                <button onClick={() => setIsVisible(true)}>
                    <i className="fa-solid fa-chevron-down" />
                </button>
            </div>
            {isVisible && <Dropdown options={currency} changeCurrency={setSelectedCurrency} />}
        </div>
    )
}

export { Select };