// import React, {useState} from "react"; 
// import Datepicker from "react-tailwindcss-datepicker"; 
// import dayjs from 'dayjs';


// export default function Calendar() { 

// const [value, setValue] = useState({ 

// startDate: null, 
// endDate: null,
// }); 
// // new Date(dayjs(value.startDate).add(3, 'day'))

// const handleValueChange = (newValue) => {
// console.log("newValue:", newValue); 
// setValue(newValue); 
// } 

// // console.log(dayjs(value.startDate).add(3, 'day'));

// // add code to render single date or range depending on product selected
// // maybe add something to product db indicating which one
// return (
// <Datepicker 
// // asSingle={true}
// useRange={false}
// showShortcuts={true}
// toggleClassName="absolute bg-pink-300 rounded-r-lg text-white right-0 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed" 
// // 🔮 enable showFooter for daterange picker only
// // showFooter={true} 
// primaryColor={"pink"} 
// placeholder={"Select date of visit"} 
// value={value} 
// displayFormat={"MM/DD/YYYY"} 
// onChange={handleValueChange} 
// readOnly={true} 

// /> 

// );
// }; 

import React, { useState } from 'react';

import { format } from 'date-fns';
import { DateRange, DayPicker } from 'react-day-picker';

export default function App() {
  const [range, setRange] = useState(DateRange | undefined);

  let footer = <p>Please pick the first day.</p>;
  if (range?.from) {
    if (!range.to) {
      footer = <p>{format(range.from, 'PPP')}</p>;
    } else if (range.to) {
      footer = (
        <p>
          {format(range.from, 'PPP')}–{format(range.to, 'PPP')}
        </p>
      );
    }
  }

  return (
    <DayPicker
      defaultMonth={new Date(2022, 8)}
      mode="range"
      min={3}
      max={6}
      selected={range}
      onSelect={setRange}
      footer={footer}
    />
  );
}