import React from 'react';
import './Dropdown.css';

const Dropdown = ({options, changeCurrency}) => {
  return (
    <ul>{options.map((option) => 
        <li key={option.country}>
            <button className='dropdownItem' onClick={(e) => changeCurrency(e.target.innerText)}>{option.currency}</button>
        </li>)}
    </ul>
  )
}

export { Dropdown };