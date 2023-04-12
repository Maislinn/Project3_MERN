import React, { useState } from 'react';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { addDays } from 'date-fns';


function SelectDates({visit}) {
  console.log(visit);
  // useState for datepicker
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [minDate, setMinDate] = useState(new Date());
  const [maxDate, setMaxDate] = useState(null)

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setMinDate(start);
    setMaxDate(addDays(start, 9))
  }

  // added code to conditionally render datepicker dependent on selected product
  // drop-in visits = select single date
  // recurring visits = select date range (max 10 days)
  // long-term = select date range (max 30 days)
  return (
    <>
    {(visit === "Drop-In Visit 30 MIN" || visit === "Drop-In Visit 60 MIN")
     &&
          <DatePicker 
            selected={startDate} 
            onChange={(date) => setStartDate(date)} 
            minDate={(new Date())}
            placeholderText='select a date' 
            withPortal/>
  }
  {(visit === "Recurring Visits 30 MIN" || visit === "Recurring Visits 60 MIN")
     &&
          <DatePicker 
            selected={startDate} 
            onChange={onChange} 
            minDate={minDate}
            maxDate={maxDate}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            placeholderText='select dates' 
            withPortal/>
  }
  {visit === "Long-Term Care"
     &&
          <DatePicker 
            selected={startDate} 
            onChange={(date) => setStartDate(date)} 
            minDate={(new Date())}
            placeholderText='click to select a date' 
            withPortal/>
  }
    </>
  );
}

export default SelectDates;