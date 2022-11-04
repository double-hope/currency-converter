import React from 'react';
import './Dropdown.css';

const Dropdown = ({options, changeCurrency, setIsVisible}) => {

  const itemClick = (e) => {
    changeCurrency(e.target.innerText);
    setIsVisible(false);
  }

  return (
    <div className='dropdownWrapper'>
      <ul>{options.map((option) => 
        <li key={option.country}>
            <button className='dropdownItem' onClick={itemClick}>{option.currency}</button>
        </li>)}
      </ul>
    </div>
  );
}

export { Dropdown };