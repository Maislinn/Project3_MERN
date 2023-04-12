// import React, { useState } from 'react';

// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";
// import { addDays } from 'date-fns';
import React, { useState } from 'react'
// 🔮 for future reference: https://reactnicedates.hernansartorio.com/#api-reference
import { enUS } from 'date-fns/locale'
import { DatePicker, DateRangePicker, START_DATE, END_DATE } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'


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
  const [date, setDate] = useState()
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
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
      }
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
      {visit === "Long-Term Care"
        &&
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={setStartDate}
          onEndDateChange={setEndDate}
          minimumDate={new Date()}
          minimumLength={3}
          maximumLength={10}
          format='dd MMM yyyy'
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
    </>
  );
}

export default SelectDates;