import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


function SelectDates() {
  // useState for datepicker
  // const [placeholder, setPlaceholder] = useState('click to select a date')
  const [startDate, setStartDate] = useState(null);

  return (
    <>
          <p>To book this visit, please select a date below.</p> 
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} placeholderText='click to select a date' />
    </>
  );
}

export default SelectDates;