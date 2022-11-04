import React, { useRef } from 'react';
import { useOutsideClick } from '../../../hooks';
import './Dropdown.css';

const Dropdown = ({options, changeCurrency, setIsVisible}) => {

  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, setIsVisible);

  const itemClick = (e) => {
    changeCurrency(e.target.innerText);
    setIsVisible(false);
  }

  return (
    <div className='dropdownWrapper' ref={wrapperRef}>
      <ul>{options.map((option) => 
        <li key={option.country}>
            <button className='dropdownItem' onClick={itemClick}>{option.currency}</button>
        </li>)}
      </ul>
    </div>
  );
}

export { Dropdown };