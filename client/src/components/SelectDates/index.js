// import React, { useState } from 'react';

// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";
// import { addDays } from 'date-fns';
import React, { useState, useEffect } from 'react'
// 🔮 for future reference: https://reactnicedates.hernansartorio.com/#api-reference
import { enUS } from 'date-fns/locale'
import { format } from 'date-fns'
import { DatePicker, DateRangePicker, START_DATE, END_DATE } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'

import "react-datepicker/dist/react-datepicker.css";

function SelectDates({ visit }) {
  // console.log(visit);
  // // useState for datepicker
  // const [startDate, setStartDate] = useState(null);
  // const [endDate, setEndDate] = useState(null);

  // const [minDate, setMinDate] = useState(new Date());
  // const [maxDate, setMaxDate] = useState(null);
  // const [maxDateLT, setMaxDateLT] = useState(null);

  // // const [minDateLT, setMinDateLT] = useState(new Date());
  // // const [startDateLT, setStartDateLT] = useState(null);


  // const onChange = (dates) => {
  //   const [start, end] = dates;
  //   setStartDate(start);
  //   setEndDate(end);
  //   setMinDate(start);
  //   setMaxDate(addDays(start, 9))
  //   setMaxDateLT(addDays(start, 29))
  // }

  // added code to conditionally render datepicker dependent on selected product
  // drop-in visits = select single date
  // recurring visits = select date range (max 10 days)
  // long-term = select date range (max 30 days)
  const [date, setDate] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();


  return (
    <>
      {(visit === "Drop-In Visit 30 MIN" || visit === "Drop-In Visit 60 MIN")
        &&
        // <DatePicker
        //   selected={startDate}
        //   onChange={(date) => setStartDate(date)}
        //   minDate={(new Date())}
        //   placeholderText='select a date'
        //   withPortal />
        <div>

          <DatePicker
            date={date}
            onDateChange={setDate}
            format='MMM dd yyyy'
            locale={enUS}
          >
            {({ inputProps, focused }) => (
              <input
                className={'input' + (focused ? ' -focused' : '')}
                {...inputProps}
              />
            )}
          </DatePicker>

          {date ? <p style={{ 'font-weight': 'bold' }}>Selected date: {format(date, 'dd MMM yyyy', { locale: enUS })} </p> : <p style={{ 'color': 'red' }}>Select date of visit above.</p>}

        </div>
      }

      <div>
        {(visit === "Recurring Visits 30 MIN" || visit === "Recurring Visits 60 MIN")
          &&
          <DateRangePicker
            startDate={startDate}
            endDate={endDate}
            onStartDateChange={setStartDate}
            onEndDateChange={setEndDate}
            minimumDate={new Date()}
            minimumLength={3}
            maximumLength={10}
            format='MMM dd yyyy'
            locale={enUS}
          >
            {({ startDateInputProps, endDateInputProps, focus }) => (
              <div className='date-range'>
                <input
                  className={'input' + (focus === START_DATE ? ' -focused' : '')}
                  {...startDateInputProps}
                  placeholder='Start date'
                />
                <span className='date-range_arrow' />
                <input
                  className={'input' + (focus === END_DATE ? ' -focused' : '')}
                  {...endDateInputProps}
                  placeholder='End date'
                />
              </div>
            )}
          </DateRangePicker>

        }
        {/* 🦄 I feel like there should be a way to dynamically set the min & max length based on selected product but for now I'm just going to leave it like this so I don't spend too much time on it*/}
        {visit === "Long-Term Care"
          &&
          <DateRangePicker
            startDate={startDate}
            endDate={endDate}
            onStartDateChange={setStartDate}
            onEndDateChange={setEndDate}
            minimumDate={new Date()}
            minimumLength={11}
            maximumLength={30}
            format='MMM dd yyyy'
            locale={enUS}
          >
            {({ startDateInputProps, endDateInputProps, focus }) => (
              <div className='date-range'>
                <input
                  className={'input' + (focus === START_DATE ? ' -focused' : '')}
                  {...startDateInputProps}
                  placeholder='Start date'
                />
                <span className='date-range_arrow' />
                <input
                  className={'input' + (focus === END_DATE ? ' -focused' : '')}
                  {...endDateInputProps}
                  placeholder='End date'
                />
              </div>
            )}
          </DateRangePicker>

        }
        
        {startDate ? 
          <p style={{ 'font-weight': 'bold' }}>
            Selected start date: {format(startDate, 'dd MMM yyyy', { locale: enUS })} 
          </p> 
          : <p style={{ 'color': 'red' }}>Select dates above.</p>
        }
        {endDate ? 
          <p style={{ 'font-weight': 'bold' }}>
            Selected end date: {format(endDate, 'dd MMM yyyy', { locale: enUS })} 
          </p> : <p></p>} 
      </div>
    </>
  );
}

export default SelectDates;